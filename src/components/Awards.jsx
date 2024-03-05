import React from "react";

const Awards = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        background: "rgb(255,255,255)",
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(224,222,222,0.6475840336134453) 0%, rgba(255,255,255,1) 0%, rgba(98,151,204,0.4739145658263305) 100%)",
      }}
    >
      <div style={{ margin: "5px", padding: "20px" }}>
        <h1 style={{ padding: "10px" }}>Awards</h1>
        <p style={{ fontSize: "18px", textAlign: "justify" }}>
          The conference will recognize outstanding contributions in{" "}
          <b>each track by awarding the Best Paper Award</b> to papers that
          demonstrate exceptional quality and innovation within their respective
          domains. Additionally, a <b>'Student's Best Paper Award'</b> will be
          presented to recognize outstanding work by student researchers.
          Furthermore, an <b>'Overall Best Paper Award'</b> will be given to the
          paper that stands out as the most exceptional and impactful across all
          tracks, showcasing exemplary research and significant contributions to
          the field. These awards aim to acknowledge and celebrate excellence in
          research and innovation within the perse spectrum of topics covered by
          the conference tracks.
        </p>
        <p style={{ fontSize: "18px", textAlign: "justify" }}>
          The conference will also present a prestigious{" "}
          <b>'Best Ph.D. Thesis Award'</b> honoring exceptional doctoral
          research that has made significant contributions to the field. This
          award recognizes the culmination of years of dedication and scholarly
          effort by doctoral candidates in advancing knowledge within their
          respective areas of study. The recipient of this award exemplifies
          outstanding research quality, originality, and impact, demonstrating
          excellence in both theoretical understanding and practical
          application. The Best Ph.D. Thesis Award underscores the conference's
          commitment to recognizing and celebrating excellence in doctoral
          research and its vital role in shaping the future of the discipline.
        </p>
      </div>
    </div>
  );
};

export default Awards;
