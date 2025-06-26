require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

// URI de conexión a tu base de datos MongoDB Atlas
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Función para mezclar un array (Fisher-Yates shuffle)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function generateAndInsertSpots() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB Atlas!");

    const db = client.db("pk4u"); // Nombre de tu base de datos
    const parkingsCollection = db.collection("parkings");
    const spotsCollection = db.collection("spots");

    // Eliminar todos los documentos existentes en la colección 'spots' para empezar limpio
    await spotsCollection.deleteMany({});
    console.log("Colección 'spots' vaciada.");

    // Obtener todos los parkings existentes para generar sus spots
    const parkings = await parkingsCollection.find({}).toArray();

    const allSpotsToInsert = [];

    for (const parking of parkings) {
      const parkingId = parking._id; // Usamos el _id de MongoDB para referenciar
      const totalLevels = parking.levels;
      const totalSpotsPerLevel = Math.ceil(parking.totalSpots / totalLevels); // Calculamos plazas por planta
      const parkingName = parking.name;

      console.log(
        `Generando spots para ${parkingName} (ID: ${parkingId}) con ${totalLevels} plantas y aprox. ${totalSpotsPerLevel} plazas/planta.`
      );

      for (let level = 1; level <= totalLevels; level++) {
        // Calcular el máximo de spots ocupados (hasta 70%)
        const maxOccupiedSpots = Math.floor(totalSpotsPerLevel * 0.7);

        // Crear array con los estados de ocupación y mezclarlo
        const occupiedArray = Array(maxOccupiedSpots)
          .fill(true)
          .concat(Array(totalSpotsPerLevel - maxOccupiedSpots).fill(false));
        shuffle(occupiedArray);

        for (let i = 1; i <= totalSpotsPerLevel; i++) {
          const spotId = new ObjectId(); // Generar un nuevo ObjectId único para cada spot
          const isOccupied = occupiedArray[i - 1];

          allSpotsToInsert.push({
            _id: spotId,
            parkingId: parkingId,
            level: level,
            spotNumber: i,
            occupied: isOccupied,
          });
        }
      }
    }

    if (allSpotsToInsert.length > 0) {
      await spotsCollection.insertMany(allSpotsToInsert);
      console.log(
        `Se insertaron ${allSpotsToInsert.length} spots en la colección 'spots'.`
      );
    } else {
      console.log(
        "No se generaron spots. Verifica que tengas parkings en la base de datos."
      );
    }
  } catch (error) {
    console.error("Error al generar e insertar spots:", error);
  } finally {
    await client.close();
    console.log("Conexión a MongoDB cerrada.");
  }
}

generateAndInsertSpots();
