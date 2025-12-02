export default function ContactPage() {
  return (
    <section className="grid gap-4">
      <h1 className="text-3xl font-extrabold text-sugarPink">Contact</h1>
      <p className="text-slate-700">Have questions or collaboration ideas? Reach out anytime.</p>
      <ul className="grid gap-2 text-slate-700">
        <li>Email: <a className="text-sugarPink underline" href="mailto:hello@sugarpaws3d.com">hello@sugarpaws3d.com</a></li>
        <li>Patreon: <a className="text-sugarPink underline" href="https://www.patreon.com/SugarPaws3D" target="_blank" rel="noreferrer">Support us</a></li>
      </ul>
    </section>
  );
}