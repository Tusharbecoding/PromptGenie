import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Generate & Share
      <br className="max-md:hidden" />
      <span className="blue_gradient text-center">AI-Crafted Prompts</span>
    </h1>
    <p className="desc text-center">
      PromptGenie is an open-source AI tool for discovering, creating, and
      sharing innovative prompts. Elevate your creativity effortlessly.
    </p>

    <Feed />
  </section>
);

export default Home;
