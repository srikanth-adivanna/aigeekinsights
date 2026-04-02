import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdSlot from "@/components/layout/AdSlot";
import ArticleCard, { ArticleCardProps } from "@/components/cards/ArticleCard";

const SAMPLE_ARTICLES: ArticleCardProps[] = [
  {
    id: "1",
    title: "Mixture of Experts Scaling: How Mixtral 8x22B Achieves GPT-4-Level Performance at Half the Cost",
    summary:
      "Researchers demonstrate that sparse MoE architectures can match dense model performance while activating only a fraction of parameters per token. Mixtral 8x22B achieves state-of-the-art results on coding and reasoning benchmarks with 39B active parameters out of 141B total.",
    source: "ArXiv cs.AI",
    category: "Research",
    tags: ["MoE", "scaling", "efficiency"],
    publishedAt: "Apr 2, 2026",
    url: "#",
  },
  {
    id: "2",
    title: "Hugging Face Releases SmolLM3: A 3B Model That Beats 7B Baselines on Most Benchmarks",
    summary:
      "SmolLM3 achieves competitive performance against 7B parameter models on reasoning, math, and code tasks. The model uses an improved tokenizer and extended context window of 128k tokens, making it practical for edge deployment.",
    source: "Hugging Face Blog",
    category: "Models",
    tags: ["LLM", "open-source"],
    publishedAt: "Apr 2, 2026",
    url: "#",
  },
  {
    id: "3",
    title: "OpenAI Operator Gets Computer Use: Can Now Browse, Click, and Fill Forms Autonomously",
    summary:
      "OpenAI's Operator agent now supports full computer use capabilities, allowing it to interact with any web interface without API access. Early benchmarks show 78% task completion on WebArena, up from 62% in the previous version.",
    source: "OpenAI Blog",
    category: "Agents",
    tags: ["agents", "computer-use"],
    publishedAt: "Apr 1, 2026",
    url: "#",
  },
  {
    id: "4",
    title: "Build a RAG Pipeline in 30 Minutes with LangChain and Chroma",
    summary:
      "Step-by-step guide to building a retrieval-augmented generation system using LangChain's latest LCEL syntax. Covers chunking strategies, embedding model selection, and how to evaluate retrieval quality without expensive annotations.",
    source: "Towards Data Science",
    category: "Tutorials",
    tags: ["RAG", "LangChain"],
    publishedAt: "Apr 1, 2026",
    url: "#",
  },
  {
    id: "5",
    title: "Cursor 1.0 Launches with Background Agent Mode and Multi-File Edits",
    summary:
      "Cursor's 1.0 release introduces an asynchronous agent that runs in the background while you continue coding. The new multi-file edit feature allows the AI to refactor across 50+ files in a single operation, with full diff preview.",
    source: "GitHub Trending",
    category: "Tools",
    tags: ["IDE", "coding-assistant"],
    publishedAt: "Mar 31, 2026",
    url: "#",
  },
  {
    id: "6",
    title: "EU AI Act Enforcement Begins: What Developers Need to Know About High-Risk System Requirements",
    summary:
      "The EU AI Act's high-risk system provisions take effect this month, requiring documentation, human oversight mechanisms, and bias audits for AI in hiring, credit scoring, and critical infrastructure.",
    source: "The Batch",
    category: "News",
    tags: ["regulation", "EU-AI-Act"],
    publishedAt: "Mar 31, 2026",
    url: "#",
  },
];

const CATEGORIES = ["All", "Research", "Models", "Agents", "Tools", "Tutorials", "News"];

const STATS = [
  { value: "15+", label: "Sources" },
  { value: "Daily", label: "Updates" },
  { value: "6", label: "Categories" },
  { value: "Free", label: "Always" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
            <div className="max-w-3xl">
              {/* Pill badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-xs text-muted-foreground font-medium">Updated daily · Apr 2, 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                The best of AI,
                <br />
                <span className="text-muted-foreground font-normal">filtered for you.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
                Research papers, models, tools, and news — aggregated from 15+ sources, deduplicated, and summarised so you can stay current without the noise.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Category filter bar */}
        <div className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex gap-0.5 overflow-x-auto py-2.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors ${
                    cat === "All"
                      ? "bg-foreground text-background font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ad banner */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6">
          <AdSlot size="banner" />
        </div>

        {/* Article grid */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{SAMPLE_ARTICLES.length}</span> articles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SAMPLE_ARTICLES.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          <div className="mt-8">
            <AdSlot size="leaderboard" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
