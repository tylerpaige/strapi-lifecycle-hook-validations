function slugify(string) {
  let output = string;
  output = output.replace(/^\s+|\s+$/g, "");
  output = output.toLowerCase();

  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaeeeeiiiioooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
    output = output.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  return output
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function setSlug(event) {
  // If there's already a slug set, leave it intact
  if (event.params.data.slug) {
    return;
  }

  // Otherwise, generate a slug from the title
  event.params.data.slug = slugify(event.params.data.title);
}

module.exports = {
  beforeCreate(event) {
    setSlug(event);
  },
  beforeUpdate(event) {
    setSlug(event);

  },
  afterUpdate(event) {
    const { result, params } = event;
  }
};
