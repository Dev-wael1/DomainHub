const axios = require("axios");
export default function handler(req, respond) {
  const params = {
    names: req.body?.value,
    tlds: req.body?.value?.includes(".") ? "" : "com",
    "include-registered": true,
  };
  axios
    .get("https://sugapi.verisign-grs.com/ns-api/2.0/bulk-check?", {
      params,
    })
    .then((res) =>
      respond.json(
        res.data.results.map((x) => ({
          domain: x.name.toLowerCase(),
          availability: x.availability,
        }))
      )
    )
    .catch((err) => console.log(err));
}
export const config = {
  api: {
    externalResolver: true,
  },
};
