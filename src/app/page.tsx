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
    tags: ["LLM", "open-source", "small-models"],
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
    tags: ["agents", "computer-use", "automation"],
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
    tags: ["RAG", "LangChain", "vector-db"],
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
    tags: ["IDE", "coding-assistant", "agents"],
    publishedAt: "Mar 31, 2026",
    url: "#",
  },
  {
    id: "6",
    title: "EU AI Act Enforcement Begins: What Developers Need to Know About High-Risk System Requirements",
    summary:
      "The EU AI Act's high-risk system provisions take effect this month, requiring documentation, human oversight mechanisms, and bias audits for AI in hiring, credit scoring, and critical infrastructure. A practical guide for compliance.",
    source: "The Batch (DeepLearning.AI)",
    category: "News",
    tags: ["regulation", "EU-AI-Act", "compliance"],
    publishedAt: "Mar 31, 2026",
    url: "#",
  },
];

const CATEGORIES = ["All", "Research", "Models", "Agents", "Tools", "Tutorials", "News"];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Banner ad */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
          <AdSlot size="banner" />
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
              The Best of AI,{" "}
              <span className="text-primary">Filtered Daily</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Research papers, tools, news, and tutorials — aggregated from 15+ sources and summarised so you can stay ahead without the noise.
            </p>
          </div>
        </section>

        {/* Category filter bar */}
        <div className="sticky top-16 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1 overflow-x-auto py-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    cat === "All"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Article grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-medium text-muted-foreground">
              Showing <span className="text-foreground font-semibold">{SAMPLE_ARTICLES.length}</span> articles
            </h2>
            <span className="text-xs text-muted-foreground">Last updated: Apr 2, 2026</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SAMPLE_ARTICLES.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          {/* Ad after grid */}
          <div className="mt-8">
            <AdSlot size="leaderboard" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
