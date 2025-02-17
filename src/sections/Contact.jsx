import AnimationFeedIn from "../UI/AnimationFeedIn";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e548354e-671b-401b-b0e9-c42c22af8397");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <section
      id="contact"
      className="min-h-screen  font-mono flex items-center justify-center py-20"
    >
      <AnimationFeedIn>
        <div className="px-4 w-150">
          <h2 className="max-w-3xl text-4xl font-bold mb-8 bg-gradient-to-r from-teal-500  to-indigo-600 bg-clip-text text-transparent text-center ">
            Get In Touch
          </h2>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                placeholder="Name..."
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="relative">
              <textarea
                type="message"
                id="message"
                name="message"
                rows={6}
                className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                placeholder="Type your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r flex justify-center  cursor-pointer from-teal-500 to-indigo-600 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246,0.4)]"
            >
              Submit
            </button>
          </form>
        </div>
      </AnimationFeedIn>
    </section>
  );
}
export default Contact;
