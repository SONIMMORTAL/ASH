type PreviewKind =
  | "prompt"
  | "vault"
  | "tracker"
  | "onesheet"
  | "pitch"
  | "proposal"
  | "magnet"
  | "sequence";

// Original, code-native editorial illustrations; these are not document screenshots.
// The linked resource's accessible title and description are supplied by the card.
export function ResourcePreview({ kind }: { kind: PreviewKind }) {
  return (
    <div className={`resource-preview preview-${kind}`} aria-hidden="true">
      {kind === "prompt" && (
        <div className="prompt-sheet preview-paper">
          <div className="paper-meta">
            <span>RESEARCH BRIEF</span>
            <span>01 / AI</span>
          </div>
          <p className="prompt-title">
            Find my
            <br />
            <em>next room.</em>
          </p>
          <div className="prompt-fields">
            <span>
              MY EXPERTISE <i />
            </span>
            <span>
              MY AUDIENCE <i />
            </span>
            <span>
              MY FORMATS <i />
            </span>
          </div>
          <span className="prompt-cursor">↳ Opportunities, with sources.</span>
        </div>
      )}
      {kind === "vault" && (
        <div className="vault-files">
          <div className="vault-file file-back">
            <span>CONFERENCES</span>
          </div>
          <div className="vault-file file-middle">
            <span>PODCASTS</span>
          </div>
          <div className="vault-file file-front">
            <div className="paper-meta">
              <span>THE SPEAKER’S VAULT</span>
              <span>INDEX / 02</span>
            </div>
            <p>
              100<span>+</span>
            </p>
            <small>rooms waiting for your voice</small>
            <div className="vault-index">
              <span>SUMMITS</span>
              <span>ASSOCIATIONS</span>
              <span>ORGANIZATIONS</span>
            </div>
          </div>
        </div>
      )}
      {kind === "tracker" && (
        <div className="tracker-sheet preview-paper">
          <div className="paper-meta">
            <span>YOUR OPPORTUNITIES</span>
            <span>↗</span>
          </div>
          <div className="tracker-grid">
            <div className="tracker-head">
              <span>OPPORTUNITY</span>
              <span>STATUS</span>
            </div>
            {["Research", "Pitched", "Follow up", "Booked"].map(
              (status, index) => (
                <div className="tracker-row" key={status}>
                  <span>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <i />
                  </span>
                  <em className={`tracker-status status-${index}`}>{status}</em>
                </div>
              ),
            )}
          </div>
          <div className="tracker-bottom">
            <span>One place. Every next step.</span>
            <span>04</span>
          </div>
        </div>
      )}
      {kind === "onesheet" && (
        <div className="onesheet-stack">
          <div className="onesheet-back">
            <span>PODCASTS</span>
          </div>
          <div className="onesheet-middle">
            <span>WORKSHOPS</span>
          </div>
          <div className="onesheet-front preview-paper">
            <div className="paper-meta">
              <span>THE SPEAKER ONE-SHEET</span>
              <span>01</span>
            </div>
            <div className="onesheet-layout">
              <div className="onesheet-portrait">
                <div />
                <i />
              </div>
              <div>
                <p>
                  Your expertise.
                  <br />
                  <em>Their next speaker.</em>
                </p>
                <div className="paper-lines">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
            <div className="onesheet-bottom">
              <span>CONFERENCES</span>
              <span>POSITIONING · TALKS · BIO</span>
            </div>
          </div>
        </div>
      )}
      {kind === "pitch" && (
        <div className="pitch-composition">
          <div className="pitch-letter preview-paper">
            <div className="paper-meta">
              <span>SUBJECT</span>
              <span>01 — FIRST HELLO</span>
            </div>
            <p>
              A conversation
              <br />
              <em>worth starting.</em>
            </p>
            <div className="paper-lines">
              <i />
              <i />
              <i />
            </div>
            <span className="letter-signature">Let’s make it happen.</span>
          </div>
          <div className="pitch-envelope">
            <span>THE PITCH COLLECTION</span>
            <i>↗</i>
          </div>
        </div>
      )}
      {kind === "proposal" && (
        <div className="proposal-book">
          <div className="proposal-spine" />
          <div className="paper-meta">
            <span>
              THE CONFERENCE
              <br />
              PROPOSAL GUIDE
            </span>
            <span>06</span>
          </div>
          <p>
            A place on
            <br />
            <em>the program.</em>
          </p>
          <div className="proposal-contents">
            <span>
              01 <i>The session</i>
            </span>
            <span>
              02 <i>The audience</i>
            </span>
            <span>
              03 <i>The takeaway</i>
            </span>
          </div>
          <div className="proposal-brand">
            otova <span>MAKE YOUR CASE.</span>
          </div>
        </div>
      )}
      {kind === "magnet" && (
        <div className="magnet-composition">
          <div className="magnet-cover">
            <span className="paper-meta">THE LEAD MAGNET FORMULA</span>
            <p>
              Give them
              <br />
              <em>
                a reason
                <br />
                to stay.
              </em>
            </p>
            <span className="magnet-edition">THE WORKSHEET / 07</span>
          </div>
          <div className="magnet-page preview-paper">
            <div className="paper-meta">
              <span>YOUR FREE RESOURCE</span>
              <span>↗</span>
            </div>
            <p>
              One useful thing.
              <br />A lasting connection.
            </p>
            <div className="paper-lines">
              <i />
              <i />
              <i />
            </div>
            <div className="magnet-field">Your email address</div>
            <span className="magnet-button">
              Send it my way <b>→</b>
            </span>
          </div>
        </div>
      )}
      {kind === "sequence" && (
        <div className="sequence-composition">
          <div className="sequence-intro">
            <span className="paper-meta">THE WELCOME SEQUENCE</span>
            <p>
              From hello
              <br />
              <em>to what’s next.</em>
            </p>
            <span>FIVE EMAILS. ONE RELATIONSHIP.</span>
          </div>
          <div className="sequence-list">
            {["Deliver", "Teach", "Story", "Proof", "Bridge"].map(
              (label, index) => (
                <div className="sequence-email" key={label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{label}</p>
                  <i>↗</i>
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
