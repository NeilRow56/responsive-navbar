export default function Home() {
  return (
    <div>
      <section
        id="about"
        className="flex h-screen bg-black  text-center text-white"
      >
        <h1 className=" m-auto text-7xl font-bold text-purple-600  ">About</h1>
      </section>
      <section id="blog" className=" flex h-screen bg-purple-900 text-white">
        <h1 className="m-auto text-7xl font-bold text-white">Blog</h1>
      </section>

      <section
        id="contact"
        className="flex h-screen bg-black  text-center text-white"
      >
        <h1 className=" m-auto text-7xl font-bold text-purple-600">Contact </h1>
      </section>
      <section
        id="projects"
        className=" flex h-screen bg-purple-900 text-white"
      >
        <h1 className="m-auto text-7xl font-bold text-white">Projects</h1>
      </section>
    </div>
  );
}
