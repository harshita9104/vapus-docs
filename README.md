# --- Vapus Docs Quick Setup Script ---

# 1. Install and Set Up Node.js Environment
echo "--- Setting up Node.js via nvm ---"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm install --lts

echo "--- Verifying Node.js and npm versions ---"
node -v
npm -v

# 2. Clone Repository and Install Dependencies
echo "--- Cloning repository and installing dependencies ---"
git clone https://github.com/harshita9104/vapus-docs.git
cd vapus-docs/website
npm install

# 3. Start the Development Server
echo "--- Setup complete! Starting development server... ---"
echo "--- Your site will be available at http://localhost:3000 ---"
npm run start