import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Youtube, Twitch as TwitchIcon, Instagram, Download, FileDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import JSZip from "jszip";

function App() {
  const { toast } = useToast();

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleDownloadHTMLCSS = async () => {
    try {
      const zip = new JSZip();
      
      // Récupération du HTML et du CSS
      const htmlContent = await fetch("/index.html").then(res => res.text());
      const cssContent = await fetch("/src/index.css").then(res => res.text());
      
      // Ajout des fichiers au ZIP
      zip.file("index.html", htmlContent);
      zip.file("styles.css", cssContent);

      // Générer le ZIP
      const content = await zip.generateAsync({ type: "blob" });
      
      // Créer un lien de téléchargement
      const url = window.URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url;
      a.download = "lecouz-website-html-css.zip";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Téléchargement réussi !",
        description: "Les fichiers HTML et CSS ont été téléchargés.",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Erreur de téléchargement",
        description: "Une erreur est survenue lors du téléchargement des fichiers.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <header className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4">LeCouz</h1>
          <p className="text-xl text-purple-200">Créateur de Contenu | Streamer | YouTuber</p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <img alt="LeCouz Profile" className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-xl" src="https://images.unsplash.com/photo-1640695254597-7ee90eed00fb" />
            <p className="text-lg max-w-2xl mx-auto text-purple-200">
              Bienvenue dans mon univers ! Je partage ma passion du gaming et du divertissement à travers mes streams et vidéos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-purple-800/30 p-6 rounded-lg backdrop-blur-sm hover:shadow-xl transition-all"
            >
              <img alt="Gaming Setup" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1589241062313-35890684416a" />
              <h2 className="text-2xl font-bold mb-2">Mes Streams</h2>
              <p className="mb-4">Rejoignez-moi en direct pour des moments de gaming inoubliables !</p>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={() => handleClick("https://www.tiktok.com/@lecouz")}
              >
                <TwitchIcon className="mr-2 h-4 w-4" />
                Suivre sur TikTok
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-purple-800/30 p-6 rounded-lg backdrop-blur-sm hover:shadow-xl transition-all"
            >
              <img alt="YouTube Content" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1549500379-1938ee1fc6a8" />
              <h2 className="text-2xl font-bold mb-2">Mes Vidéos</h2>
              <p className="mb-4">Du contenu gaming exclusif et des moments épiques !</p>
              <Button 
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={() => handleClick("https://www.youtube.com/@lecouz")}
              >
                <Youtube className="mr-2 h-4 w-4" />
                Voir sur YouTube
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-purple-800/30 p-6 rounded-lg backdrop-blur-sm hover:shadow-xl transition-all"
            >
              <img alt="Social Media" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1627682734052-db59e022c56d" />
              <h2 className="text-2xl font-bold mb-2">Réseaux Sociaux</h2>
              <p className="mb-4">Suivez mon quotidien et restez connectés !</p>
              <Button 
                className="w-full bg-pink-600 hover:bg-pink-700"
                onClick={() => handleClick("https://www.instagram.com/lecouz")}
              >
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6">Rejoignez la Communauté !</h2>
            <p className="text-lg text-purple-200 mb-8">
              Ne manquez aucun de mes streams et contenus exclusifs.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => handleClick("https://www.tiktok.com/@lecouz")}
              >
                S'abonner
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-600 text-purple-200 hover:bg-purple-600/20"
              >
                En savoir plus
              </Button>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-600/20 flex items-center gap-2"
                onClick={handleDownloadHTMLCSS}
              >
                <FileDown className="h-4 w-4" />
                Télécharger HTML/CSS
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-purple-200">
        <p>© 2025 LeCouz. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
