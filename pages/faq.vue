<template>
  <b-container class="faq">
    <div class="cadre">
      <BackToHome />
      <h2>FAQ : Comment réagir face à la crise du COVID-19&nbsp;?</h2>
      <h3 class="subtitle">
        Qu’est-ce que le COVID-19 et quels en sont les symptômes principaux&nbsp;?
      </h3>
      <p>
        Le virus identifié en janvier 2020 en Chine est un nouveau Coronavirus qui est une grande
        famille de virus, qui provoquent des maladies allant d’un simple rhume (certains virus saisonniers sont
        des Coronavirus) à des pathologies plus sévères comme le MERS-COV ou le SRAS.Depuis le 11 mars 2020, l’OMS
        qualifie la situation mondiale du COVID-19 de pandémie ; c’est-à-dire que l’épidémie est désormais
        mondiale.
      </p>
      <p>
        Les symptômes principaux sont la fièvre ou la sensation de fièvre et des signes de difficultés
        respiratoires de type toux ou essoufflement.
      </p>
      <h3 class="subtitle">
        Quels gestes sanitaires pour éviter la transmission du virus&nbsp;?
      </h3>
      <p>
        Les recommandations sanitaires varient sensiblement en fonction du pays de localisation actuel.
        Le gouvernement français préconise les gestes barrières suivant :
      </p>
      <p>
        <ol>
          <li>Se laver les mains très régulièrement</li>
          <li>Tousser ou éternuer dans son coude ou dans un mouchoir</li>
          <li>Saluer sans se serrer la main, éviter les embrassades</li>
          <li>Utiliser des mouchoirs à usage unique et les jeter</li>
          <li>Eviter les rassemblements, limiter les déplacements et les contacts.</li>
        </ol>
      </p>
      <h3 class="subtitle">
        Je suis bloqué à l’étranger après un déplacement temporaire, que faire&nbsp;?
      </h3>
      <p>
        <ul>
          <li>Inscrivez-vous sur <a href="https://pastel.diplomatie.gouv.fr/fildariane/dyn/public/login.html" target="_blank">l’application Arianne</a>, afin que le centre de crise du Ministère de l’Europe et des affaires étrangères puisse vous localiser, vous contacter en cas de besoin, et vous envoyer des messages d’information.</li>
          <li>Consultez le <a href="https://pastel.diplomatie.gouv.fr/fildariane/dyn/public/login.html" target="_blank">site « conseil aux voyageurs</a>, qui est mis à jour régulièrement:</li>
          <li>Faites-vous connaître auprès du consulat le plus proche, si possible par mail ou téléphone, en indiquant si vous présentez des points de vulnérabilité (problèmes de santé, de logement, enfants…).</li>
          <li>Contacter les compagnies aériennes sur place pour trouver un billet si vous n’en avez pas en votre possession.</li>
          <li>Suivez sur les réseaux sociaux les groupes d’expatriés français dans votre pays ainsi que le pages des ambassades de France. N’hésitez pas à demander aux Français sur place des conseils ou de l’aide. Amis Français de l’étranger, nous comptons sur vous pour vous montrer solidaires de vos compatriotes.</li>
        </ul>
      </p>
      <p>
        <b>!</b> Si vous vous sentez en danger ou êtes en situation de vulnérabilité, vous pouvez contacter le numéro du centre de crise et de soutien du Ministère de l’Europe et des affaires étrangères, disponible 7/7, 24/24 au 01 53 59 11 37 ou au 01 53 59 11 00.
        Les consulats mettent également à disposition un numéro d’urgence sur leur site Internet.
      </p>
      <h3 class="subtitle">
        Est-ce que je dois rentrer en France si je suis résident permanent à l’étranger&nbsp;?
      </h3>
      <p>
        Si vous avez votre résidence habituelle en dehors de l’Europe, il est recommandé, dans les 30 jours à venir, d’éviter autant que possible les déplacements internationaux y compris dans le cadre d’un retour sur le territoire national à moins que des raisons impératives ne vous y contraignent.
      </p>
      <p>
        Dans le cas où votre résidence se situe dans l’espace européen mais en dehors de la France, il est conseillé d’éviter des déplacements intra-européens, même pour revenir sur le territoire national, à moins que des raisons impératives ne vous y contraignent. Si plusieurs frontières terrestres devaient être franchies pour regagner la France, des retours directs par voie aérienne devraient, dans la mesure du possible, être privilégiés.
      </p>
      <h3 class="subtitle">
        Vais-je trouver un billet d’avion à un prix abordable&nbsp;?
      </h3>
      <p>
        Le gouvernement travaille  avec les compagnies aériennes à travers le monde pour organiser un mécanisme global permettant le retour des Français à l’étranger notamment avec des tarifications maîtrisées et accessibles à nos compatriotes. En revanche, il n’y aura pas de remboursement de voyage par l’Etat qui ne peut intervenir dans la relation contractuelle vous liant avec votre compagnie de transport ou voyagiste.
      </p>
      <h3 class="subtitle">
        Je n’arrive pas à joindre l’Ambassade ou le consulat sur place&nbsp;?
      </h3>
      <p>
        Les ambassades et consulats reçoivent de très nombreux appels y compris lorsqu’ils travaillent 24h/24. Il faut renouveler son appel. Vous trouverez également un grand nombre d’information sur le site du <a href="https://www.diplomatie.gouv.fr/fr/le-ministere-et-son-reseau/actualites-du-ministere/informations-coronavirus-covid-19/" target="_blank">ministères des Affaires étrangères</a>.
      </p>
    </div>
  </b-container>
</template>

<script>
  import BackToHome from '../components/BackToHome'

  export default {
    name: 'CommentCaMarche',
    components: { BackToHome }
  }
</script>

<style scoped>
  .faq {
    max-width: 900px;
  }
</style>
