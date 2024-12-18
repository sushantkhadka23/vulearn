import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import { commandApiEndpoint } from "../apis/commandApi";

const TerminalController: React.FC = () => {
  const [fileSystem, setFileSystem] = useState<{ [key: string]: string[] }>({ "/": [] });
  const [currentDir, setCurrentDir] = useState<string>("/");
  const [terminalLines, setTerminalLines] = useState<React.ReactNode[]>([
    <TerminalOutput key={0}>Welcome to the Command Prompt Lab!</TerminalOutput>,
    <TerminalOutput key={1}>Commands: clear, ls, mkdir, touch, cd, rm, cmatrix</TerminalOutput>,
  ]);

  const stripQuotes = (input: string) => input.replace(/^['"]|['"]$/g, "");

  const handleInput = async (input: string) => {
    const args = input.trim().split(" ");
    const command = args[0];
    const params = args.slice(1);
  
    let output:string = "";
  
    const predefinedCommands = new Set([
      "clear",
      "ls",
      "mkdir",
      "touch",
      "cd",
      "echo",
      "rm",
      "cmatrix",
    ]);
  
    if (predefinedCommands.has(command)) {
      // Handle predefined commands
      switch (command) {
        case "echo":
          output = stripQuotes(params.join(" "));
          break;
  
        case "clear":
          setTerminalLines([]);
          return;
  
        case "ls":
          output = fileSystem[currentDir]?.join("\n") || "";
          break;
  
        case "mkdir":
          if (params[0]) {
            const dirName = params[0];
            if (fileSystem[currentDir]?.includes(dirName)) {
              output = `Directory already exists: ${dirName}`;
            } else {
              setFileSystem({
                ...fileSystem,
                [currentDir]: [...fileSystem[currentDir], dirName],
                [`${currentDir}${dirName}/`]: [],
              });
              output = `Directory created: ${dirName}`;
            }
          } else {
            output = "Usage: mkdir <directory_name>";
          }
          break;
  
        case "touch":
          if (params[0]) {
            const fileName = params[0];
            if (fileSystem[currentDir]?.includes(fileName)) {
              output = `File already exists: ${fileName}`;
            } else {
              setFileSystem({
                ...fileSystem,
                [currentDir]: [...fileSystem[currentDir], fileName],
              });
              output = `File created: ${fileName}`;
            }
          } else {
            output = "Usage: touch <file_name>";
          }
          break;
  
        case "cd":
          if (params[0]) {
            const targetDir = params[0];
            const newDir =
              targetDir === ".."
                ? currentDir.substring(
                    0,
                    currentDir.lastIndexOf("/", currentDir.length - 2) + 1
                  )
                : `${currentDir}${targetDir}/`;
  
            if (fileSystem[newDir]) {
              setCurrentDir(newDir);
              output = `Changed directory to: ${newDir}`;
            } else {
              output = `No such directory: ${targetDir}`;
            }
          } else {
            output = "Usage: cd <directory_name>";
          }
          break;
  
        case "rm":
          if (params[0]) {
            const target = params[0];
            const targetIndex = fileSystem[currentDir]?.indexOf(target);
  
            if (targetIndex > -1) {
              const updatedContents = [...fileSystem[currentDir]];
              updatedContents.splice(targetIndex, 1);
  
              const updatedFileSystem = { ...fileSystem, [currentDir]: updatedContents };
              if (fileSystem[`${currentDir}${target}/`]) {
                delete updatedFileSystem[`${currentDir}${target}/`];
              }
  
              setFileSystem(updatedFileSystem);
              output = `Removed: ${target}`;
            } else {
              output = `No such file or directory: ${target}`;
            }
          } else {
            output = "Usage: rm <file_or_directory_name>";
          }
          break;
  
        case "cmatrix":
          startMatrixEffect();
          return;
  
        default:
          output = `Command not found: ${command}`;
      }
    } else {
      // Handle commands not in the predefined set by sending them to the endpoint
      try {
        const data = await commandApiEndpoint(input);  
        output = data.toString();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        output = `Error: ${errorMessage}`;
      }
    }
    
    setTerminalLines((prevLines) =>
      prevLines.concat(
        <TerminalOutput key={prevLines.length}>{`$ ${input}`}</TerminalOutput>,
        <TerminalOutput key={prevLines.length + 1}>{output}</TerminalOutput>
      )
    );
  };
  

  const startMatrixEffect = () => {
    const originalLines = [...terminalLines];
    setTerminalLines([]);

    let interval: NodeJS.Timeout | null = null;

    const generateMatrixLine = () => {
      const lineLength = Math.floor(Math.random() * 50) + 20;
      const randomChars = Array.from({ length: lineLength }, () =>
        String.fromCharCode(0x30A0 + Math.random() * 96)
      ).join("");

      setTerminalLines((prevLines) => [
        ...prevLines.slice(-20),
        <TerminalOutput key={prevLines.length}>
          <p className="text-green-600 ">{randomChars}</p>
        </TerminalOutput>,
      ]);
    };

    interval = setInterval(generateMatrixLine, 100);

    setTimeout(() => {
      if (interval) clearInterval(interval);
      setTerminalLines(originalLines);
      setTerminalLines((prevLines) =>
        prevLines.concat(
          <TerminalOutput key={prevLines.length}>Exiting matrix mode...</TerminalOutput>
        )
      );
    }, 10000);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 text-sm">
      <Terminal
        name={`Terminal (${currentDir})`}
        colorMode={ColorMode.Dark}
        onInput={handleInput}
      >
        {terminalLines}
      </Terminal>
    </div>
  );
};

export default TerminalController;

