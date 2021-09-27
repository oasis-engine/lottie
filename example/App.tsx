import React, { useEffect } from "react";
import { LottieAnimation } from "../src";
import {  Camera, Entity, Vector3, Vector4, WebGLEngine } from "oasis-engine";
import { OrbitControl } from "@oasis-engine/controls";
import "./App.css";

function App() {
	useEffect(() => {
		const engine = new WebGLEngine("canvas");

		engine.canvas.resizeByClientSize();

		const root = engine.sceneManager.activeScene.createRootEntity();

		const cameraEntity = root.createChild("camera");
		const camera = cameraEntity.addComponent(Camera);
		cameraEntity.transform.setPosition(0, 0, 10);
		cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
		cameraEntity.addComponent(OrbitControl);

		/*
		// lion
		engine.resourceManager.load<Entity>({
			urls: [
				'https://gw.alipayobjects.com/os/bmw-prod/9ad65a42-9171-47ab-9218-54cf175f6201.json',
				'https://gw.alipayobjects.com/os/bmw-prod/90779ce2-50f1-4780-ae74-725083eba852.atlas',
			],
			type: 'lottie'
		}).then((lottieEntity) => {
			root.addChild(lottieEntity);
			const lottie:LottieAnimation = lottieEntity.getComponent(LottieAnimation);
			lottie.isLooping = true;
			lottie.play();

			const clone = lottieEntity.clone();
			root.addChild(clone);
			const lottie1:LottieAnimation = clone.getComponent(LottieAnimation);
			clone.transform.setPosition(2, 0, 0);
			lottie1.isLooping = true;
			lottie1.speed = 0.5;
			lottie1.play();
		});

		// layers in assets
		engine.resourceManager.load<Entity>({
			urls: [
				"https://gw.alipayobjects.com/os/bmw-prod/01e685be-4090-4e9c-bdef-f437038a4a78.json",
				"https://gw.alipayobjects.com/os/bmw-prod/07dcd051-b3d2-4f36-9459-725ae66d9cbf.atlas"
			],
			type: 'lottie'
		}).then((lottieEntity) => {
			root.addChild(lottieEntity);
			const lottie:LottieAnimation = lottieEntity.getComponent(LottieAnimation);
			lottie.isLooping = true;
			lottieEntity.transform.setPosition(-3, 2, 0);
			lottieEntity.transform.setScale(0.5, 0.5, 0.5);
			lottie.play();
		});

		// 3d
		engine.resourceManager.load<Entity>({
			urls: [
				"https://gw.alipayobjects.com/os/bmw-prod/70bed2d5-7284-44bf-9df6-638f66945ffd.json",
				"https://gw.alipayobjects.com/os/bmw-prod/a2853204-2d4a-48e5-9cb7-b89de8dcc7bf.atlas"
			],
			type: 'lottie'
		}).then((lottieEntity) => {
			root.addChild(lottieEntity);
			const lottie:LottieAnimation = lottieEntity.getComponent(LottieAnimation);
			lottie.isLooping = true;
			lottieEntity.transform.setPosition(0, 2, 0);
			lottieEntity.transform.setScale(0.5, 0.5, 0.5);
			lottie.play();
		});

		// multi keyframe property
		engine.resourceManager.load<Entity>({
			urls: [
				"https://gw.alipayobjects.com/os/bmw-prod/32420b26-7305-46ef-bfa1-48c5d6b2a45e.json",
				"https://gw.alipayobjects.com/os/bmw-prod/3c054399-2b10-4d68-96f7-0973e3d9ace6.atlas"
			],
			type: 'lottie'
		}).then((lottieEntity) => {
			root.addChild(lottieEntity);
			const lottie:LottieAnimation = lottieEntity.getComponent(LottieAnimation);
			lottie.isLooping = true;
			lottieEntity.transform.setPosition(3, 2, 0);
			lottieEntity.transform.setScale(0.5, 0.5, 0.5);
			lottie.play();
		});

		// /*
		// multi keyframe property
		engine.resourceManager.load<Entity>({
			urls: [
				"https://gw.alipayobjects.com/os/bmw-prod/b46be138-e48b-4957-8071-7229661aba53.json",
				"https://gw.alipayobjects.com/os/bmw-prod/6447fc36-db32-4834-9579-24fe33534f55.atlas"
			],
			type: 'lottie'
		}).then((lottieEntity) => {
			root.addChild(lottieEntity);
			const lottie:LottieAnimation = lottieEntity.getComponent(LottieAnimation);
			lottie.isLooping = true;
			lottieEntity.transform.setPosition(-3, -2, 0);
			lottieEntity.transform.setScale(0.5, 0.5, 0.5);
			lottie.play();
		});


		// /*
		// layers in assets
		engine.resourceManager.load<Entity>({
			urls: [
				"https://gw.alipayobjects.com/os/bmw-prod/40cb0849-5747-4962-9215-8dfe0981e7aa.json",
				"https://gw.alipayobjects.com/os/bmw-prod/4af30cc0-0606-4636-bd5f-1c434df9b387.atlas"
			],
			type: 'lottie'
		}).then((lottieEntity) => {
			root.addChild(lottieEntity);
			const lottie:LottieAnimation = lottieEntity.getComponent(LottieAnimation);
			lottie.isLooping = true;
			lottieEntity.transform.setPosition(0, -4, 0);
			lottieEntity.transform.setScale(0.5, 0.5, 0.5);
			lottie.play();
		});


		// /*
		// layers in assets
		engine.resourceManager.load<Entity>({
			urls: [
				"https://gw.alipayobjects.com/os/bmw-prod/51d538cc-f95a-4a63-a2cd-bde336257786.json",
				"https://gw.alipayobjects.com/os/bmw-prod/bec5c755-00d4-4bbf-b3a2-2b5ad3195c7f.atlas"
			],
			type: 'lottie'
		}).then((lottieEntity) => {
			root.addChild(lottieEntity);
			const lottie:LottieAnimation = lottieEntity.getComponent(LottieAnimation);
			lottie.isLooping = true;
			lottieEntity.transform.setPosition(4, -4, 0);
			lottieEntity.transform.setScale(0.5, 0.5, 0.5);
			lottie.play();
		});
		*/

		// /*
		// layers in assets
		engine.resourceManager.load<Entity>({
			urls: [
				"https://gw.alipayobjects.com/os/bmw-prod/b3d8569c-9e04-44af-a2f6-bfd064de0cbc.json",
				"https://gw.alipayobjects.com/os/bmw-prod/965eb2ca-ee3c-4c54-a502-7fdc0673f1d7.atlas"
			],
			type: 'lottie'
		}).then((lottieEntity) => {
			root.addChild(lottieEntity);
			const lottie:LottieAnimation = lottieEntity.getComponent(LottieAnimation);
			lottie.isLooping = true;
			// lottieEntity.transform.setPosition(2, -4, 0);
			lottieEntity.transform.setPosition(0, -3, 0);
			// lottieEntity.transform.setScale(0.5, 0.5, 0.5);
			lottie.play();
		});
		// */
		engine.run();
	}, []);

	return <canvas id="canvas"></canvas>;
}

export default App;
