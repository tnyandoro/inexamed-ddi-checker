import React from "react";
import "./Pregnancy.css";

export default function Pregnancy() {
  return (
    <div className="container-preg">
      <h2>Drugs in Pregnancy</h2>
      <p className="text-preg"> 
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
      <div className="App-table">
      <table>
        <tr>
          <th>Drug </th>
          <th>Pregnancy Recommendation </th>
          <th>Breast-Feeding Recommendation </th>
        </tr>
        <tr>
          <td>Abatacept </td>
          <td>Limited Human Data—Animal Data Suggest Low Risk </td>
          <td>No Human Data—Potential Toxicity </td>
        </tr>
        <tr>
          <td>Abemaciclib</td>
          <td>Based on the mechanism of action and data from animal reproduction studies, use during pregnancy may cause fetal harm.</td>
          <td>It is not known if abemaciclib is present in breast milk. Due to the potential for adverse events in the breastfed infant, the manufacturer does not recommend breastfeeding during

          therapy and for 3 weeks after the last abemaciclib dose.</td>
        </tr>
        <tr>
          <td>Abiraterone</td>
          <td>Contraindicated</td>
          <td>Contraindicated</td>
        </tr>
        <tr>
        <td>Acarbose</td>
        <td>	

        Limited Human Data—Animal Data Suggest Low Risk</td>
        <td>No Human Data—Probably Compatible</td>
      </tr>
      <tr>
        <td>Acetazolamide</td>
        <td>Compatible</td>
        <td>Compatible</td>
      </tr>
      <tr>
      <td>Acetylcystiene</td>
      <td>Compatible—Maternal Benefits >> Embryo–Fetal Risk</td>
      <td>No Human Data—Probably Compatible</td>
    </tr>
    <tr>
      <td>Acetylsalicylic Acid</td>
      <td>Activated charcoal is not absorbed systemically following oral administration. Use during pregnancy is not expected to result in significant exposure to the fetus</td>
      <td>Activated charcoal is not absorbed systemically following oral administration. Breast-feeding is not expected to result in significant exposure to a nursing child.</td>
    </tr>
    <tr>
    <td>Megha</td>
    <td>19</td>
    <td>Female</td>
    <td>Male</td>
  </tr>
  <tr>
    <td>Subham</td>
    <td>25</td>
    <td>Male</td>
    <td>Male</td>
  </tr>
      </table>
    </div>
    </div>
  );
}
