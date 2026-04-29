import Link from "next/link";
import { BlueprintGrid } from "@/components/ui/BlueprintGrid";
import { GlobalSplineBackground } from "@/components/ui/GlobalSplineBackground";

// We use the Next.js App Router data fetching method
async function getGithubProjects() {
  try {
    // Note: To avoid rate limiting, you can add your GH token if needed, 
    // but fetching public repos of a user works without it for small request volumes.
    // We use next: { revalidate: 60 } to ensure data is fresh but won't trigger GitHub's strict rate limits
    const res = await fetch("https://api.github.com/users/MANOJ-80/repos?sort=pushed&per_page=100", {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error(`Failed to fetch github repos: Status ${res.status}`);
      // If we hit the rate limit, returning an empty array triggers the fallback UI
      return [];
    }

    const repos = await res.json();
    
    // Filter only projects that start with "0x" (case insensitive)
    const zeroXProjects = repos.filter((repo: any) => 
      repo.name.toLowerCase().startsWith("0x")
    );

    return zeroXProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function WorksPage() {
  const projects = await getGithubProjects();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent-lime selection:text-black">
      {/* Background components to match the rest of the site */}
      <GlobalSplineBackground />
      <BlueprintGrid />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto py-32 px-6 pointer-events-auto select-auto">
        
          {/* Header Section */}
        <div className="mb-20 border-b border-white/10 pb-12">
          <Link 
            href="/#projects"
            className="group font-mono text-gray-400 text-sm tracking-widest hover:text-accent-lime transition-colors duration-300 inline-flex items-center gap-2 mb-12"
          >
            <span className="text-accent-lime group-hover:-translate-x-1 transition-transform duration-300">&lt;-</span> 
            ./RETURN_HOME
          </Link>

          <div>
            <span className="font-mono text-accent-lime text-xs tracking-widest block mb-4 drop-shadow-[0_2px_10px_rgba(204,255,0,0.5)]">
              [ALL] // ARTIFACTS
            </span>
            <h1 
              className="font-bold uppercase leading-[0.95] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] mb-6 flex flex-wrap items-baseline gap-2 md:gap-3"
            >
              <span className="text-white font-mono tracking-tighter text-5xl md:text-7xl font-light opacity-90">0x</span>
              <span className="text-accent-lime text-4xl md:text-6xl" style={{ fontFamily: "var(--font-family-brettaline)" }}>ARCHIVES.</span>
            </h1>
            <p 
              className="text-gray-300 max-w-2xl text-xl md:text-2xl leading-relaxed tracking-wide"
              style={{ fontFamily: "var(--font-family-brettaline)" }}
            >
              A collection of my branded repositories and tools.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any) => (
              <a
                key={project.id}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-accent-lime/50 transition-all duration-500 hover:-translate-y-2 p-8 hover:bg-black/60 relative overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex-grow z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h2 
                      className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent-lime transition-colors duration-300 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] uppercase"
                      style={{ fontFamily: "var(--font-family-brooklyn)" }}
                    >
                      {project.name}
                    </h2>
                    
                    {/* Github Icon SVG */}
                    <svg className="w-6 h-6 text-gray-500 group-hover:text-accent-lime transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  
                  <p 
                    className="font-mono italic text-gray-400 text-[13px] md:text-[14px] leading-loose line-clamp-4 mb-6"
                  >
                    {project.description || "No description provided. Dive into the repository to explore the codebase."}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10 z-10">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></span>
                    <span className="font-mono text-xs text-accent-lime uppercase tracking-wider">
                      {project.language || "Multi-Language"}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase bg-black/50 px-2 py-1 border border-white/10">
                    UPDATED: {new Date(project.pushed_at || project.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center font-mono border border-dashed border-white/20 bg-black/20 backdrop-blur-sm">
            <span className="text-accent-lime animate-pulse mb-4 block text-2xl">_</span>
            <p className="text-gray-400 uppercase tracking-widest text-sm">Fetching 0x Artifacts...</p>
            <p className="text-gray-600 text-xs mt-2">If this persists, GitHub API limit may be reached.</p>
          </div>
        )}
      </main>
    </div>
  );
}
