
import { ToolTopics } from "../models/tools";

// these tool topics are related to Recon.
const reconTopics: ToolTopics[] = [
  {
    name: "Amass",
    description:
      "A tool for network reconnaissance and vulnerability scanning, allowing users to gather information about domains and their subdomains.",
    githubLink: "https://github.com/OWASP/Amass",
  },
  {
    name: "SubdomainFinder",
    description:
      "A tool for finding subdomains of a given domain, useful for mapping the attack surface of a target.",
    webLink: "https://subdomainfinder.c99.nl/",
  },
  {
    name: "Wappalyzer",
    description:
      "A browser extension and tool for identifying web application technologies, including CMS, frameworks, and more.",
    githubLink: "https://github.com/tunetheweb/wappalyzer",
    webLink: "https://www.wappalyzer.com/",
  },
  {
    name: "W3Techs",
    description:
      "A tool for analyzing web technologies, providing insights into the technologies used by websites globally.",
    webLink: "https://w3techs.com/",
  },
  {
    name: "FFUF",
    description:
      "A fast web fuzzer for discovering resources on web servers and performing vulnerability scanning.",
    githubLink: "https://github.com/ffuf/ffuf",
  },
  {
    name: "Arjun",
    description:
      "A tool designed to find hidden endpoints in web applications through parameter discovery.",
    githubLink: "https://github.com/s0md3v/Arjun",
  },
  {
    name: "Nmap",
    description:
      "A powerful network scanning tool used for security auditing and discovering hosts and services on a computer network.",
    githubLink: "https://github.com/nmap/nmap",
  },
  {
    name: "Shodan",
    description:
      "A search engine for Internet-connected devices, used for discovering vulnerabilities in devices exposed online.",
    webLink: "https://www.shodan.io/",
  },
  {
    name: "Cert.sh",
    description:
      "A tool for certificate transparency and SSL/TLS scanning, allowing users to search for SSL certificates issued by Certificate Authorities.",
    webLink: "https://crt.sh/",
  },
  {
    name: "Wayback",
    description:
      "A tool for browsing the Internet Archive, allowing users to view archived versions of websites over time.",
    webLink: "https://web.archive.org/",
  },
];

// these are for the topic exploit tools
const exploitTopics: ToolTopics[] = [
  {
    name: "Sqlmap",
    description:
      "Sqlmap is a tool designed for extracting subdomains from various sources such as search engines and DNS.",
    githubLink: "https://github.com/sqlmapproject/sqlmap",
    webLink: "https://sqlmap.org/",
  },
  {
    name: "Nuclei",
    description:
      "Nuclei is a fast tool for automated vulnerability scanning based on templates.",
    githubLink: "https://github.com/projectdiscovery/nuclei",
    webLink: "https://nuclei.projectdiscovery.io/",
  },
  {
    name: "Commix",
    description:
      "Commix is an automated tool for testing and exploiting command injection vulnerabilities in web applications.",
    githubLink: "https://github.com/commixproject/commix",
    webLink: "http://commixproject.com/",
  },

  {
    name: "Dalfox",
    description:
      "Dalfox is a fast and powerful XSS parameter scanner that helps identify XSS vulnerabilities in web applications.",
    githubLink: "https://github.com/hahwul/dalfox",
    webLink:"https://dalfox.hahwul.com/",
  },
];

const additionalToolTopics: ToolTopics[] = [
  {
    name: "Burp Suite",
    description: "A comprehensive web application security testing tool with features like an intercepting proxy, vulnerability scanner, and various utilities for testing and analyzing web applications."
  },
  {
    name: "Caido",
    description: "A lightweight web security auditing toolkit built in Rust, CAIDO helps security professionals efficiently audit web applications. It features real-time request analysis, customizable request modification, an intuitive UI, project management capabilities, and client/server architecture for versatile deployment."
  },
];


export { reconTopics, exploitTopics, additionalToolTopics };
