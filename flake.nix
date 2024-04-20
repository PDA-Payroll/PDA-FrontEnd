{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat.url = "https://flakehub.com/f/edolstra/flake-compat/1.tar.gz";
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = {
    self,
    flake-compat,
    flake-utils,
    nixpkgs,
    ...
  } @ inputs: 
  
  flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = inputs.nixpkgs.legacyPackages.${system};
      src = ./frontend;
    in {
      # This is a cache so we don't always have to rebuild
      packages = rec {
        node-modules = pkgs.buildNpmPackage {
          pname = "pdaFrontEnd";
          version = "0.0.1";
          npmDeps = pkgs.importNpmLock {
            npmRoot = src;
          };
          src = src;
          npmConfigHook = pkgs.importNpmLock.npmConfigHook;
        };
        entryPoint = pkgs.writeShellScriptBin "startFrontEnd" ''
          export NODE_PATH=${node-modules}/lib/node_modules/frontend/node_modules
          exec ${pkgs.nodejs}/bin/node ${node-modules}/lib/node_modules/frontend # to wherever the binary will be
        '';
      };

      #development Environment
      devShells = {
        default = pkgs.mkShell {
          buildInputs = with pkgs; [
            node2nix
            nodePackages.typescript
            nodePackages.typescript-language-server
            nodejs
            postgresql_16
            yarn
          ];
          shellHook = ''
            zsh
            exit
          '';
        };
      };
    });
}
