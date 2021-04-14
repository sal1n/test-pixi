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
                var graphics = new PIXI.Graphics();
                graphics.beginFill(0xFFFF00);
                graphics.lineStyle(5, 0xFF0000);
                graphics.drawRect(0, 0, 300, 200);
                app.stage.addChild(graphics);
            }
        }
    }
</script>
