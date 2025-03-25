
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

// Define project types
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  areas?: string[];
  institution?: string;
  publication?: string;
  awards?: string;
  date?: string;
  url: string;
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const { language, translations } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-slide-up');
              el.classList.remove('opacity-0');
            }, index * 200);
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

  // Project data
  const projects: Project[] = [
    {
      id: "eucadrought",
      title: language === 'en' ? 
        "In silico analysis of differential gene expression associated with drought resistance in Eucalyptus grandis and regulatory miRNAs" : 
        "Análise in silico de expressão diferencial de genes associados à resistência ao estresse hídrico em Eucalyptus grandis e miRNAs reguladores",
      description: language === 'en' ? 
        "This project analyzed public RNA-seq data from NCBI SRA to identify genes and miRNAs involved in drought response in Eucalyptus grandis. The results uncovered critical metabolic pathways and regulatory miRNAs that could be targets for genetic improvement toward drought resistance." : 
        "Este projeto analisou dados públicos de RNA-seq do NCBI SRA para identificar genes e miRNAs envolvidos na resposta ao estresse hídrico em Eucalyptus grandis. Os resultados revelaram vias metabólicas críticas e miRNAs reguladores que podem ser alvos para melhoramento genético visando resistência à seca.",
      image: "https://images.unsplash.com/photo-1627278631921-874a70b5f973?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["R", "Python", "matplotlib", "seaborn", "DESeq2", "ggplot2", "pheatmap", "enrichplot", "annotationHub"],
      areas: ["transcriptômica", "metatranscriptômica", "pequenos RNAs", "miRNAs", "expressão diferencial de genes (DGE)", "botânica", "fisiologia vegetal"],
      date: "2024-04",
      institution: "Universidade Federal do Tocantins, Colegiado de Engenharia Florestal, Laboratório de Fisiologia Molecular",
      url: "https://github.com/jvtarss/euca"
    },
    {
      id: "handroanthus",
      title: language === 'en' ? 
        "In silico analysis of differential gene expression in GABA biosynthesis in purple ipê (Handroanthus impetiginosus)" : 
        "Análise in silico da expressão diferencial de genes da biossíntese do GABA em ipê roxo (Handroanthus impetiginosus)",
      description: language === 'en' ? 
        "This study investigated the differential expression of genes associated with GABA biosynthesis in Handroanthus impetiginosus under drought stress. Results showed increased expression of enzymes such as GAD, GABA-T, and SSADH, suggesting a crucial role of GABA in Cerrado adaptation." : 
        "Este estudo investigou a expressão diferencial de genes associados à biossíntese do GABA em Handroanthus impetiginosus sob estresse hídrico. Os resultados mostraram aumento na expressão de enzimas como GAD, GABA-T e SSADH, sugerindo um papel crucial do GABA na adaptação ao Cerrado.",
      image: "https://images.unsplash.com/photo-1602856839174-81e79025ebf5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HISAT2", "featureCounts", "BLASTp", "MAFFT", "IQ-TREE", "iTOL", "DESeq2", "pheatmap", "R"],
      areas: ["transcriptômica", "metatranscriptômica", "fisiologia vegetal", "ciência de plantas (botânica)", "expressão diferencial de genes (DGE)"],
      date: "2024-08",
      institution: "Universidade Federal do Tocantins, Colegiado de Engenharia Florestal, Laboratório de Fisiologia Molecular",
      publication: "Núcleo'24 (Liga Nacional de Biotecnologia)",
      url: "https://github.com/jvtarss/Teixeira-2024"
    },
    {
      id: "warf1",
      title: language === 'en' ? 
        "In silico analysis of differential gene expression associated with warfarin metabolism" : 
        "Análise in silico de expressão diferencial de genes associados ao metabolismo da warfarina",
      description: language === 'en' ? 
        "This project analyzed the regulation of hepatic genes in response to warfarin, identifying expression patterns related to drug metabolism, oxidative stress, and detoxification. The results provide insights for personalizing anticoagulant therapies." : 
        "Este projeto analisou a regulação de genes hepáticos em resposta à warfarina, identificando padrões de expressão relacionados ao metabolismo do fármaco, estresse oxidativo e detoxificação. Os resultados fornecem insights para a personalização de terapias anticoagulantes.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Galaxy", "HISAT2", "featureCounts", "pheatmap", "R"],
      areas: ["farmacocinética", "metatranscriptômica", "transcriptômica", "farmacologia", "RNA-seq", "metabolismo humano"],
      institution: "Universidade Federal do Tocantins, Colegiado de Engenharia de Bioprocessos e Biotecnologia, Laboratório de Biologia Molecular",
      publication: "Núcleo'24 (Liga Nacional de Biotecnologia)",
      awards: "Menção honrosa",
      url: "https://github.com/jvtarss/Brandtner-2024"
    },
    {
      id: "mfc",
      title: language === 'en' ? 
        "Use of microbial fuel cells in wastewater treatment and bioenergy generation" : 
        "Utilização de células combustíveis microbianas no tratamento de águas residuais e geração de bioenergia",
      description: language === 'en' ? 
        "This study analyzed microbial communities in fuel cells using 16S rRNA amplicon sequencing. Results highlighted the relationship between substrates and energy efficiency, contributing to the development of sustainable technologies." : 
        "Este estudo analisou comunidades microbianas em células combustíveis utilizando sequenciamento de amplicon RNAr 16S. Os resultados destacaram a relação entre substratos e eficiência energética, contribuindo para o desenvolvimento de tecnologias sustentáveis.",
      image: "https://images.unsplash.com/photo-1706204787082-8abe29026ae6?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["QIIME2", "PICRUST2", "Python", "SCNICC", "Cytoscape", "DADA2", "matplotlib", "seaborn", "pandas"],
      areas: ["metagenômica", "microbioma", "amplicon", "ecologia", "produção de energia"],
      publication: "DESAFIOS (Revista Interdisciplinar da Universidade Federal do Tocantins) - Qualis A2",
      institution: "Universidade Federal do Tocantins, Colegiado de Engenharia de Bioprocessos e Biotecnologia, Laboratório de Eletroquímica e Universidade de São Paulo, Faculdade de Zootecnia e Engenharia de Alimentos",
      date: "2025-03",
      url: "https://github.com/jvtarss/ccm-2024"
    },
    {
      id: "biogas",
      title: language === 'en' ? 
        "Use of microbial fuel cells in wastewater treatment and bioenergy generation" : 
        "Utilização de células combustíveis microbianas no tratamento de águas residuais e geração de bioenergia",
      description: language === 'en' ? 
        "This project investigated the relationship between different biomass sources and the efficiency of microbial fuel cells. Results demonstrated the potential of agricultural waste for sustainable energy generation." : 
        "Este projeto investigou a relação entre diferentes fontes de biomassa e a eficiência de células combustíveis microbianas. Os resultados demonstraram o potencial de resíduos agrícolas para geração de energia sustentável.",
      image: "https://images.unsplash.com/photo-1706204786979-e2076316143f?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["QIIME2", "PICRUST2", "Python", "SCNICC", "Cytoscape", "DADA2", "matplotlib", "seaborn", "pandas"],
      areas: ["metagenômica", "microbioma", "amplicon", "ecologia", "produção de energia"],
      publication: "DESAFIOS (Revista Interdisciplinar da Universidade Federal do Tocantins) - Qualis A2",
      date: "2025-08",
      url: "https://github.com/jvtarss/biogas"
    },
    {
      id: "ema",
      title: language === 'en' ? 
        "EMA (Eucalyptus MicroRNA Archive): a tissue-specific miRNA database for eucalyptus" : 
        "EMA (Eucalyptus MicroRNA Archive): banco de dados de microRNAs específicos de tecidos em eucalipto",
      description: language === 'en' ? 
        "Development of an interactive database of tissue-specific miRNAs in eucalyptus species, integrating prediction tools and functional analysis. The resource aims to facilitate research in molecular biology and genetic improvement." : 
        "Desenvolvimento de um banco de dados interativo de microRNAs específicos de tecidos em espécies de eucalipto, integrando ferramentas de predição e análise funcional. O recurso visa facilitar pesquisas em biologia molecular e melhoramento genético.",
      image: "https://images.unsplash.com/photo-1676776295520-065802f5659a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["MySQL", "PHP", "HTML", "CSS", "Typescript", "DBeaver", "mirdeep2", "intaRNA", "miRanda", "einverted", "RNAFold"],
      institution: "Universidade Federal de Minas Gerais (UFMG), Universidade Estadual do Norte Fluminense (UENF), University of Texas",
      date: "TBA",
      url: "https://llfisbiom.uft.edu.br/e-m-a"
    }
  ];

  // Get unique technologies for filtering
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))].sort();

  return (
    <section id="projects" className="section-padding" ref={projectsRef}>
      <div className="container mx-auto">
        <div className="mb-16 text-center animate-on-scroll opacity-0">
          <span className="inline-block glass-card py-1 px-3 rounded-full text-sm text-bio-accent mb-3 backdrop-blur-xl border border-white/20">
            {language === 'en' ? 'Projects Portfolio' : 'Portfólio de Projetos'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'en' ? 'Recent Work' : 'Trabalhos Recentes'}
          </h2>
          <div className="h-1 w-20 bg-bio-accent mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-card rounded-xl overflow-hidden animate-on-scroll opacity-0 h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bio-dark/80 to-transparent"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">{project.title}</h3>
                
                <p className="text-white/70 mb-4 text-sm line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="mt-auto">
                  <h4 className="text-sm font-medium mb-2 text-white/80">{language === 'en' ? 'Technologies:' : 'Tecnologias:'}</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="text-xs py-1 px-2 rounded-md bg-bio-accent/30 text-white border border-bio-accent/40">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs py-1 px-2 rounded-md bg-bio-accent/30 text-white border border-bio-accent/40">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                  
                  {/* Date */}
                  {project.date && (
                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-white/80">{language === 'en' ? 'Date:' : 'Data:'}</h4>
                      <p className="text-xs text-white/70">{project.date}</p>
                    </div>
                  )}
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-button inline-flex items-center px-4 py-2 rounded-lg w-full justify-center mt-2 text-sm text-white transition-all duration-300 hover:bg-white/10"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {language === 'en' ? 'View Project' : 'Ver Projeto'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
