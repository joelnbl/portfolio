import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Interested in collaboration? Let's connect!
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-8 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <a href="mailto:joelumc@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                joelumc@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">Remote - Based in Spain</p>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}