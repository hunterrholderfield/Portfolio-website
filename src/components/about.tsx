import { site, skillGroups } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="About" title="Engineer at the intersection of AI and automation" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {site.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            <Stat label="Based in" value={site.location} />
            <Stat label="Role" value="Automation Engineer" />
            <Stat label="Building with" value="MCP / LLMs / Stackon Space" />
            <Stat label="Shipping" value="Personal projects" />
          </div>

          <div className="mt-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              Toolkit
            </h3>
            <div className="mt-4 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-medium text-foreground">
                    {group.title}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-foreground px-2.5 py-1 text-xs text-background"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface px-5 py-5">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
        {label}
      </p>
      <p className="mt-1.5 text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}
