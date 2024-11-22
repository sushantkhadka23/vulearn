interface LevelProps {
    id: number;
    title: string;
    description: string;
    challenge: string;
    hint: string;
    solution: string;
  }
  
  const levels: LevelProps[] = [
    {
      id: 1,
      title: "Basic XSS",
      description: "Learn to inject a simple script into a web page.",
      challenge: "Inject an alert with any message of your choice.",
      hint: "Try using <script> tags with an alert function.",
      solution: "<script>alert('Your Message')</script>"
    },
  ];

export default levels;