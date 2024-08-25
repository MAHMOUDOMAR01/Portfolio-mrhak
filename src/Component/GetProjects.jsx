import { useState, useEffect } from "react";

export const useGetProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const fetchData = () => {
    // بيانات ثابتة للمشاريع
    const projects = [
      {
        title: "Data Fetch",
        repoUrl: "https://github.com/MAHMOUDOMAR01/Data-Fetch-and-Save-Script",
        img: "/src/assets/ctf.png",
        id: "6",
      },
      {
        title: "virus scanner",
        repoUrl: "https://github.com/MAHMOUDOMAR01/virus_scanner",
        img: "/src/assets/virus_scanner.png",
        id: "2",
      },
      {
        title: "keylogger",
        repoUrl: "https://github.com/MAHMOUDOMAR01/keylogger",
        img: "/src/assets/keylogger.png",
        id: "3",
      },
      {
        title: "Domain Extraction and Analysis Tool",
        repoUrl: "https://github.com/MAHMOUDOMAR01/Domain-Extraction-and-Analysis-Tool",
        img: "/src/assets/Domain.png",
        id: "4",
      },
      {
        title: "Location Tracking",
        repoUrl: "https://github.com/MAHMOUDOMAR01/Location-Tracking-Project",
        img: "/src/assets/Location.png",
        id: "5",
      },
      {
        title: "Web Application Firewall (WAF)",
        repoUrl: "https://github.com/MAHMOUDOMAR01/Web-Application-Firewall-WAF",
        img: "/src/assets/Web-Application-Firewall-WAF.png",
        id: "1",
      },
    ];
    
    setProjects(projects.reverse());
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return { loading, projects };
};
