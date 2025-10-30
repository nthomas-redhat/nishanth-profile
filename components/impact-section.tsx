export function ImpactSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-green-200/30 rounded-full blur-3xl translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-pink-200/30 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-2xl md:text-3xl leading-relaxed text-balance">
          I've focused my career on building{" "}
          <strong className="font-bold text-foreground text-3xl md:text-4xl">scalable systems</strong> and{" "}
          <strong className="font-bold text-foreground text-3xl md:text-4xl">empowering teams</strong>.
        </p>
      </div>
    </section>
  )
}
