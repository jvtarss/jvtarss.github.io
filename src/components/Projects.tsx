import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Filter, Github } from 'lucide-react';

interface ProjectType {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "In silico analysis of differential gene expression associated with drought resistance in Eucalyptus grandis and regulatory miRNAs",
      shortTitle: "Eucalyptus Drought Response Analysis",
      description: "This project analyzed public RNA-seq data from NCBI SRA to identify genes and miRNAs involved in drought response in Eucalyptus grandis. The results uncovered critical metabolic pathways and regulatory miRNAs that could be targets for genetic improvement toward drought resistance.",
      image: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["R", "Python", "matplotlib", "RNA-seq", "Bioinformatics", "Data Analysis"],
      githubUrl: "https://github.com/username/eucalyptus-drought"
    },
    {
      id: 2,
      title: "In silico analysis of differential gene expression in GABA biosynthesis in purple ipê (Handroanthus impetiginosus)",
      shortTitle: "GABA Biosynthesis in Purple Ipê",
      description: "This study investigated the differential expression of genes associated with GABA biosynthesis in Handroanthus impetiginosus under drought stress. Results showed increased expression of enzymes such as GAD, GABA-T, and SSADH, suggesting a crucial role of GABA in Cerrado adaptation.",
      image: "https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["HISAT2", "featureCounts", "BLASTp", "Gene Expression", "Bioinformatics", "Drought Stress"],
      githubUrl: "https://github.com/username/gaba-biosynthesis-ipe"
    },
    {
      id: 3,
      title: "In silico analysis of differential gene expression associated with warfarin metabolism",
      shortTitle: "Warfarin Metabolism Analysis",
      description: "This project analyzed the regulation of hepatic genes in response to warfarin, identifying expression patterns related to drug metabolism, oxidative stress, and detoxification. The results provide insights for personalizing anticoagulant therapies.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Galaxy", "HISAT2", "featureCounts", "Drug Metabolism", "Bioinformatics"],
      githubUrl: "https://github.com/username/warfarin-metabolism"
    },
    {
      id: 4,
      title: "Use of microbial fuel cells in wastewater treatment and bioenergy generation",
      shortTitle: "Microbial Fuel Cells",
      description: "This study analyzed microbial communities in fuel cells using 16S rRNA amplicon sequencing. Results highlighted the relationship between substrates and energy efficiency, contributing to the development of sustainable technologies.",
      image: "https://images.unsplash.com/photo-1635231164278-b3f732198cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["QIIME2", "PICRUST2", "Python", "Microbiome", "Bioenergy", "Sustainable Energy"],
      githubUrl: "https://github.com/username/microbial-fuel-cells"
    },
    {
      id: 5,
      title: "EMA (Eucalyptus MicroRNA Archive): a tissue-specific miRNA database for eucalyptus",
      shortTitle: "Eucalyptus MicroRNA Archive",
      description: "Development of an interactive database of tissue-specific miRNAs in eucalyptus species, integrating prediction tools and functional analysis. The resource aims to facilitate research in molecular biology and genetic improvement.",
      image: "https://images.unsplash.com/photo-1640158615573-cd28feb29b54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["MySQL", "PHP", "HTML", "CSS", "JavaScript", "Database", "miRNA", "Web Development", "Bioinformatics"],
      githubUrl: "https://github.com/username/ema-database"
    }
  ];

  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-slide-up');
              el.classList.remove('opacity-0');
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="section-padding" ref={projectsRef}>
      <div className="container mx-auto">
        <div className="mb-16 text-center animate-on-scroll opacity-0">
          <span className="inline-block glass-card py-1 px-3 rounded-full text-sm text-bio-accent mb-3">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Work</h2>
          <div className="h-1 w-20 bg-bio-accent mx-auto rounded-full"></div>
        </div>

        <div className="mb-10 overflow-x-auto animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="flex space-x-2 min-w-max pb-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`flex items-center px-4 py-2 rounded-full ${
                activeFilter === 'all'
                  ? 'accent-button'
                  : 'glass-button'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              All
            </button>
            
            {uniqueTags.slice(0, 8).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === tag
                    ? 'accent-button'
                    : 'glass-button'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-on-scroll opacity-0 h-full flex flex-col"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-bio-dark to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{project.shortTitle}</h3>
              
              <p className="text-white/70 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="tech-badge text-white/80">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="tech-badge text-white/80">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex justify-between mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-button px-4 py-2 rounded-lg flex items-center text-sm"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-button px-4 py-2 rounded-lg flex items-center text-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
