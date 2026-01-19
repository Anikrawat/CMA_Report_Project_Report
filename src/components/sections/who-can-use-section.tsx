import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteContainer } from "@/components/sections/site-shell";

type Pill = {
  label: string;
};

function PillList({ items }: { items: Pill[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item.label}
          className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
        >
          {item.label}
        </span>
      ))}
      <span className="rounded-full border border-border bg-accent px-3 py-1 text-xs text-accent-foreground">
        And more
      </span>
    </div>
  );
}

export function WhoCanUseSection() {
  const manufacturing: Pill[] = [
    { label: "Flour Mill (Atta Chakki) 🌾" },
    { label: "Spice Grinding Unit 🌶️" },
    { label: "Paper Plate & Cup Manufacturing 🧻" },
    { label: "Candle Making 🕯️" },
    { label: "Agarbatti (Incense Stick) Unit 🌀" },
    { label: "Detergent Powder/Liquid Manufacturing 🧼" },
    { label: "Disposable Bag Unit (Cloth/Paper) 🛍️" },
    { label: "Furniture Manufacturing 🪑" },
  ];

  const agriculture: Pill[] = [
    { label: "Cow Dairy Farm 🐄" },
    { label: "Goat Farming 🐐" },
    { label: "Poultry Farm 🐓" },
    { label: "Fish Farming (Aquaculture) 🐟" },
    { label: "Vermicomposting Unit 🌿" },
    { label: "Mushroom Farming 🍄" },
    { label: "Organic Farming 🌱" },
    { label: "Bee Keeping (Apiculture) 🍯" },
  ];

  const servicesRetail: Pill[] = [
    { label: "Two-Wheeler Repair Workshop 🛵" },
    { label: "Mobile & Computer Repair Shop 💻" },
    { label: "Beauty Parlour / Salon 💇‍♀️" },
    { label: "Coaching / Tuition Center 📚" },
    { label: "Courier & Parcel Service 📦" },
    { label: "Travel Booking & Ticketing Agency ✈️" },
    { label: "Photography Studio 📸" },
    { label: "Kirana / General Store 🛒" },
    { label: "Hardware Shop 🔧" },
    { label: "Electrical & Electronics Shop 💡" },
    { label: "Medical Store (Pharmacy) 💊" },
    { label: "Mobile Shop 📱" },
    { label: "Agriculture Equipment Trading 🚜" },
  ];

  return (
    <section id="who-can-use" className="border-b border-border bg-background">
      <SiteContainer className="py-12 md:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Who can use it?</h2>
          <p className="text-muted-foreground">
            Suitable for manufacturing, agriculture, service sector, retail/trading and more.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Manufacturing</CardTitle>
            </CardHeader>
            <CardContent>
              <PillList items={manufacturing} />
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Agriculture</CardTitle>
            </CardHeader>
            <CardContent>
              <PillList items={agriculture} />
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Service / Retail / Trading</CardTitle>
            </CardHeader>
            <CardContent>
              <PillList items={servicesRetail} />
            </CardContent>
          </Card>
        </div>
      </SiteContainer>
    </section>
  );
}

