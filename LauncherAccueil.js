class LauncherAccueil {
  static aAcceuil = null;

  constructor() {
    if (!LauncherAccueil.aAcceuil) {
      LauncherAccueil.aAcceuil = new Acceuil();
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

// Exécution de la classe
const launcher = new LauncherAccueil();
launcher.main();
