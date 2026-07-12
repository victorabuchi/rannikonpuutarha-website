"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import styles from "./page.module.css";

const roleCards = [
  {
    titleKey: "jobs.role1_title",
    pillKeys: [
      "jobs.role1_pill1",
      "jobs.role1_pill2",
      "jobs.role1_pill3",
      "jobs.role1_pill4",
      "jobs.role1_pill5",
      "jobs.role1_pill6",
    ],
  },
  {
    titleKey: "jobs.role2_title",
    pillKeys: ["jobs.role2_pill1", "jobs.role2_pill2"],
  },
  {
    titleKey: "jobs.role3_title",
    pillKeys: ["jobs.role3_pill1", "jobs.role3_pill2", "jobs.role3_pill3"],
  },
  {
    titleKey: "jobs.role4_title",
    pillKeys: ["jobs.role4_pill1", "jobs.role4_pill2", "jobs.role4_pill3"],
  },
  {
    titleKey: "jobs.role5_title",
    pillKeys: [
      "jobs.role5_pill1",
      "jobs.role5_pill2",
      "jobs.role5_pill3",
      "jobs.role5_pill4",
      "jobs.role5_pill5",
    ],
  },
];

export default function JobsPage() {
  const { t } = useLanguage();
  const [where, setWhere] = useState<"finland" | "abroad">("finland");

  const requiredMark = (
    <span className={styles.fieldMark}>({t("jobs.form_required")})</span>
  );
  const optionalMark = (
    <span className={styles.fieldMark}>({t("jobs.form_optional")})</span>
  );

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>{t("jobs.title")}</h1>
          <p className={styles.pageIntro}>{t("jobs.intro")}</p>
          <span className={styles.seasonBadge}>{t("jobs.season_badge")}</span>
        </div>
      </section>

      <section className={styles.roles}>
        <div className="container">
          <h2 className={styles.sectionHeading}>{t("jobs.roles_heading")}</h2>
          <div className={styles.rolesGrid}>
            {roleCards.map((card) => (
              <div key={card.titleKey} className={styles.roleCard}>
                <h3 className={styles.roleTitle}>{t(card.titleKey)}</h3>
                <ul className={styles.pills}>
                  {card.pillKeys.map((key) => (
                    <li key={key} className={styles.pill}>
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.apply}>
        <div className="container">
          <h2 className={styles.sectionHeading}>{t("jobs.apply_heading")}</h2>
          <div className={styles.pathGrid}>
            <div className={styles.pathCard}>
              <h3 className={styles.pathTitle}>{t("jobs.path_fi_title")}</h3>
              <p>{t("jobs.path_fi_text")}</p>
              <a href="#hakemus" className={styles.pathButton}>
                {t("jobs.path_fi_button")}
              </a>
            </div>
            <div className={styles.pathCard}>
              <h3 className={styles.pathTitle}>
                {t("jobs.path_abroad_title")}
              </h3>
              <p>{t("jobs.path_abroad_text")}</p>
              <a
                href="mailto:rannikko@rannikonpuutarha.fi"
                className={styles.pathButtonOutline}
              >
                rannikko@rannikonpuutarha.fi
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <form
            id="hakemus"
            className={styles.form}
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset className={styles.radioGroup}>
              <legend className={styles.label}>{t("jobs.form_where")}</legend>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="where"
                  value="finland"
                  checked={where === "finland"}
                  onChange={() => setWhere("finland")}
                />
                {t("jobs.form_where_fi")}
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="where"
                  value="abroad"
                  checked={where === "abroad"}
                  onChange={() => setWhere("abroad")}
                />
                {t("jobs.form_where_abroad")}
              </label>
            </fieldset>

            <label className={styles.field}>
              <span className={styles.label}>{t("jobs.form_name")}</span>
              <input type="text" name="name" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t("jobs.form_email")}</span>
              <input type="email" name="email" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t("jobs.form_phone")}</span>
              <input type="tel" name="phone" className={styles.input} />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>{t("jobs.form_nationality")}</span>
              <input type="text" name="nationality" className={styles.input} />
            </label>

            <fieldset className={styles.periodGroup}>
              <legend className={styles.label}>{t("jobs.form_period")}</legend>
              <div className={styles.periodInputs}>
                <label className={styles.field}>
                  <span className={styles.label}>{t("jobs.form_from")}</span>
                  <input
                    type="date"
                    name="period_from"
                    className={styles.input}
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>{t("jobs.form_to")}</span>
                  <input
                    type="date"
                    name="period_to"
                    className={styles.input}
                  />
                </label>
              </div>
            </fieldset>

            <label className={styles.field}>
              <span className={styles.label}>{t("jobs.form_experience")}</span>
              <textarea
                name="experience"
                rows={4}
                className={styles.input}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>
                {t("jobs.form_message")} {optionalMark}
              </span>
              <textarea name="message" rows={4} className={styles.input} />
            </label>

            {where === "finland" && (
              <>
                <label className={styles.field}>
                  <span className={styles.label}>
                    {t("jobs.form_permit")} {requiredMark}
                  </span>
                  <input type="file" name="permit" className={styles.input} />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>
                    {t("jobs.form_passport")} {requiredMark}
                  </span>
                  <input
                    type="file"
                    name="passport"
                    className={styles.input}
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>
                    {t("jobs.form_taxcard")} {optionalMark}
                  </span>
                  <input type="file" name="taxcard" className={styles.input} />
                </label>
              </>
            )}

            {where === "abroad" && (
              <>
                <fieldset className={styles.radioGroup}>
                  <legend className={styles.label}>
                    {t("jobs.form_worked_before")}
                  </legend>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="worked_before" value="yes" />
                    {t("jobs.form_worked_yes")}
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="worked_before" value="new" />
                    {t("jobs.form_worked_new")}
                  </label>
                </fieldset>
                <label className={styles.field}>
                  <span className={styles.label}>
                    {t("jobs.form_passport")} {requiredMark}
                  </span>
                  <input
                    type="file"
                    name="passport"
                    className={styles.input}
                  />
                </label>
              </>
            )}

            <button type="submit" disabled className={styles.submit}>
              {t("jobs.form_submit")}
            </button>
            <p className={styles.formNote}>{t("jobs.form_note")}</p>
          </form>
        </div>
      </section>

      <section className={styles.portal}>
        <div className="container">
          <p className={styles.portalText}>{t("jobs.portal_text")}</p>
          <a
            href="https://rannikon.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.portalButton}
          >
            {t("footer.worker_portal")}
          </a>
        </div>
      </section>
    </>
  );
}
