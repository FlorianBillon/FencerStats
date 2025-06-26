import { Acceuil } from "./Acceuil.js"; // ✅ Import correct

export class LauncherAccueil {
  static aAcceuil = null;

  constructor() {
    if (!LauncherAccueil.aAcceuil) {
      LauncherAccueil.aAcceuil = new Acceuil(); // ✅ Acceuil est bien défini
    }
  }

  main() {
    try {
      LauncherAccueil.aAcceuil.createGUI();
    } catch (error) {
      console.error("Erreur lors de la création de l'interface :", error);
    }
  }
}

// ✅ Assure-toi que l'export est bien écrit
export default LauncherAccueil;

// Exécution de la classe
const launcher = new LauncherAccueil();
launcher.main();


