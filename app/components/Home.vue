<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>
        <Canvas width="100%" height="100%" @ready="canvasReady"></Canvas>
    </Page>
</template>

<script>
    import * as PIXI from "pixi.js"
    import { TNSPIXIApplication } from "@nativescript/canvas-pixi"
    export default {
        methods: {
            canvasReady(args){
               const canvas = args.object;
               const app = new TNSPIXIApplication({
                       canvas,
                       backgroundColor: 0x1099bb,
                   });
               app.loader.add("bg_grass", "~/assets/images/bg_grass.jpg").load(build);
           
               function build() {
                   // Create a new texture
                   const texture = app.loader.resources.bg_grass.texture;
           
                   // Create the simple plane
                   const verticesX = 10;
                   const verticesY = 10;
                   const plane = new PIXI.SimplePlane(texture, verticesX, verticesY);
           
                   plane.x = 100;
                   plane.y = 100;
           
                   app.stage.addChild(plane);
           
                   // Get the buffer for vertice positions.
                   const buffer = plane.geometry.getBuffer("aVertexPosition") ;
           
                   // Listen for animate update
                   app.ticker.add((delta) => {
                       // Randomize the vertice positions a bit to create movement.
                       for (let i = 0; i < buffer.data.length; i++) {
                           buffer.data[i] += Math.random() - 0.5;
                       }
                       buffer.update();
                   });
                   }
            }
        }
    }
</script>
