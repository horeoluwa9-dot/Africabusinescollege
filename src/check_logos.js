import https from "https";
const domains = ["cchub.africa", "cchubnigeria.com", "norrsken.org", "norrsken.vc", "africinvest.com", "partechpartners.com", "meltwater.org", "au.int", "afdb.org", "klab.rw", "bongohive.co.zm"];
(async () => {
  for (const d of domains) {
    const res = await new Promise(r => https.get("https://logo.clearbit.com/"+d, r));
    console.log(d, res.statusCode);
  }
})()
