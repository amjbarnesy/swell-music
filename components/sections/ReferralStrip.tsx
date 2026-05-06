import Button from "@/components/ui/Button";

export default function ReferralStrip() {
  return (
    <section
      className="py-10 px-6"
      style={{ backgroundColor: "#F5A623" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <h2
          className="text-xl sm:text-2xl font-black text-center sm:text-left"
          style={{ fontFamily: "var(--font-display)", color: "#412402" }}
        >
          A GP, OT or social worker? Refer someone today.
        </h2>
        <Button href="/get-involved/refer" variant="dark">
          Make a referral →
        </Button>
      </div>
    </section>
  );
}
