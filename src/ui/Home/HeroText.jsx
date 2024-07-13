function HeroText() {
  return (
    <div className="mb-28 mt-20 flex flex-col gap-6">
      <h1 className="z-10 text-center text-4xl font-bold tracking-wide sm:text-5xl lg:text-7xl">
        Your Only <span className="text-blue-400">Quiz Hub</span>.
      </h1>
      <p className="z-10 mx-2 max-w-2xl text-center text-base font-medium text-neutral-400 lg:text-lg">
        A one-stop hub for all things quiz-related. Easily create and host
        quizzes or participate in existing ones. Join us and transform your
        quizzing experience now!
      </p>
    </div>
  );
}

export default HeroText;
