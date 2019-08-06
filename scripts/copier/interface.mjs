import path from "path";
import Copier from "./copier.mjs";

/// dirs from client
const dirForClientBuild = path.join(process.cwd(), "..", "..", "client", "build");

/// dirs to server
const dirForServerReactBuild = path.join(process.cwd(), "..", "..", "server", "public");

const arrayToCopy = [{ from: dirForClientBuild, to: dirForServerReactBuild }];

// const copierStatic = new Copier({ dirsFromClient, dirsForServer });
const copierStatic = new Copier({ arrayToCopy });

copierStatic.init();
