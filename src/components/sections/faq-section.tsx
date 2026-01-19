import { SiteContainer } from "@/components/sections/site-shell";

const faqs = [
  {
    q: "What is the Project Report & CMA Report Builder?",
    a: "It’s a guided tool to create bank-ready project reports and CMA with structured templates and smart calculations.",
  },
  {
    q: "Can I create a Project Report & CMA by myself using this tool?",
    a: "Yes. The builder guides you step-by-step so you can create the report without consultants or complex spreadsheets.",
  },
  {
    q: "How long does it take to complete a Project Report & CMA?",
    a: "For most businesses, you can finish in under 10 minutes depending on how much data you already have.",
  },
  {
    q: "Can I edit my Project Report & CMA after downloading it?",
    a: "Yes. Depending on your plan, you can edit and regenerate the report multiple times.",
  },
  {
    q: "How many times can I download my Project Report & CMA?",
    a: "Download limits depend on the selected plan (Basic/Advanced/Premium).",
  },
  {
    q: "Is there an assisted service available?",
    a: "Yes. The premium plan includes expert help for customized reporting aligned to bank requirements.",
  },
  {
    q: "What are the advantages of using this builder?",
    a: "Time saving, bank-friendly format, accurate projections, and a consistent structure for faster review.",
  },
  {
    q: "Is the Project Report & CMA free?",
    a: "The builder has paid plans. Pricing starts at ₹399 with higher plans offering more sections and edits.",
  },
  {
    q: "What should I do if I need clarifications while creating a report?",
    a: "Use the support/contact section to reach out—help is available.",
  },
  {
    q: "Do bank reports need to be signed or stamped by a CA?",
    a: "Some loan cases may require CA certification. It can be added as an additional service depending on plan.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-border bg-background">
      <SiteContainer className="py-12 md:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">FAQ&apos;s</h2>
          <p className="text-muted-foreground">Superior services!</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="text-base font-semibold">{item.q}</div>
              <div className="mt-2 text-sm text-muted-foreground">{item.a}</div>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

