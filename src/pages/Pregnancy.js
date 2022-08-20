import React from "react";

export default function Pregnancy() {
  return (
    <div>
      <h1>Drug drug interaction Checker </h1>
      <p>
        {" "}
        SApplication Program Interfaces (APIs) are available to users to
        retrieve data from several drug information sources, including RxNorm,
        MED-RT and RxTerms. Currently these APIs are available:{" "}
      </p>
      <ul>
        <li>
          <strong>RxNorm</strong> for retrieving data from the RxNorm data set
        </li>
        <li>MED-RT</li>
        <li>Prescribable RxNorm API </li>
        <li>RxTerms API </li>
        <li>RxClass API </li>
        <li>Drug Interaction API </li>
      </ul>
      <h2>Drugs in Pregnancy</h2>
      <p> 
        {" "}
                Pregnancy is a unique period in a woman’s life. Many changes are happening to her body that may affect the
        pharmacology of medications. During pregnancy, a woman’s gastric pH is increased and gastric motility is
        reduced which may interfere with the rate and extent of medication absorption. Maternal plasma volume is
        increased leading to changes in the volume of distribution. In addition, increases in progesterone and
        estradiol levels may affect the hepatic metabolism of some medications. Glomerular filtration rate is
        increased due to increase renal blood flow which may affect renally cleared medications. Despite the
        changes, the pharmacology of most medications is not altered enough to require dosing changes.1
        {""}
      </p>
      <p>
        {" "}
                The placenta is an organ of exchange allowing the mother to pass nutrients and medications to the fetus;
        therefore, medications administered to pregnant women have the potential to affect the growing fetus. The
        fetus is generally at the greatest risk of developing teratogenic effects from medications during the first
        trimester, but it is drug specific. The use of medications in pregnancy should be evaluated for the benefits
        and risks to both the mother and fetus. Upon evaluation, some medications may be used sparingly during
        some trimesters and contraindicated in others. 2 All efforts should be made to optimize the risk benefit ratio.
        {" "}
      </p>
      <p>
        {" "}
                Drugs with low molecular weight, low maternal protein binding, low ionization, and high lipophilicity are
        more likely to cross the placenta and cause pharmacologic affects.1 The developing fetus’s body systems are
        not mature; therefore, the fetus may lack the ability to metabolize medications causing teratogenic effects. 
        {" "}
      </p>
      <p>
        {" "}
        The FDA has categorized the potential teratogenic risk of medications by an A, B, C, D, X system.
        <strong>Category A: </strong>Controlled studies in women have failed to demonstrate a risk to the fetus in the first trimester
        and there is no evidence of risk in later trimesters. The possibility of fetal harm appears remote. Medications
        in this class are considered safe to use in pregnancy. Examples of medications in this class are vitamins and
        levothyroxine.
        {" "}
      </p>
      <p>
        {" "}
        <strong>Category B: </strong>Either animal‐reproduction studies have not demonstrated a fetal risk but there are no
        controlled studies in pregnant women, or animal studies have demonstrated risk to the fetus that was not
        confirmed in controlled studies in pregnant women in the first trimester and there is no evidence of a risk in
        later trimesters. Medications in this class are generally considered safe. Examples of medications in this class
        are acetaminophen and amoxicillin.
        {" "}
      </p>
      <p>
        {" "}
        <strong>Category C: </strong>Evidence of human fetal risk has been documented, but the benefits to the mother may be
        acceptable despite the risk to the fetus. Drugs in this class may be used in pregnancy if the benefits to the
        mother outweigh the risk to the fetus (i.e. a life threatening situation or a serious disease for which safer
        medication cannot be used or are not efficacious). Examples of medications in this class are phenytoin and
        valproic acid.
        {" "}
      </p>
      <p>
        {" "}
        <strong>Category D: </strong>Evidence of human fetal risk has been documented, but the benefits to the mother may be
        acceptable despite the risk to the fetus. Drugs in this class may be used in pregnancy if the benefits to the
        mother outweigh the risk to the fetus (i.e. a life threatening situation or a serious disease for which safer
        medication cannot be used or are not efficacious). Examples of medications in this class are phenytoin and
        valproic acid.
        {" "} 
      </p>
      <p>
        {" "}
        <strong>Category X: </strong>Studies in animals or humans have demonstrated teratogenic effects. The risk to the fetus
        clearly outweighs any potential benefit to the mother. Drugs in this category are contraindicated in
        pregnancy. Examples of medications in this class are thalidomide and warfarin.2
        {" "}
      </p>
    </div>
  );
}
