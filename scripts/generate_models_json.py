import os
import json

# Configuration
MODELS_DIR = "../public/models"
OUTPUT_FILE = "../src/data/models.json"

def generate_models_json():
    models = []
    for filename in os.listdir(MODELS_DIR):
        if filename.lower().endswith((".png", ".jpg", ".jpeg", ".webp")):
            name = os.path.splitext(filename)[0].replace("_", " ").title()
            model = {
                "name": name,
                "image": f"/models/{filename}",
                "description": f"Description for {name}."  # Customize or expand later
            }
            models.append(model)

    with open(OUTPUT_FILE, "w") as f:
        json.dump(models, f, indent=2)
    print(f"✅ {len(models)} model entries written to {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_models_json()
