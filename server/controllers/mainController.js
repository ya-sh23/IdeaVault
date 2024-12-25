/**
 * GET/
 * Homepage
 */
exports.homepage = async (req, res) => {
  const locals = {
    titles: "IdeaVault",
    description: "Free NodeJs Notes App",
  };
  res.render("index", { locals, layout: "../views/layouts/front-page" });
};

/**
 * GET/
 * About
 */
exports.about = async (req, res) => {
  const locals = {
    titles: "About - IdeaVault",
    description: "Free NodeJs Notes App",
  };
  res.render("about", locals);
};
