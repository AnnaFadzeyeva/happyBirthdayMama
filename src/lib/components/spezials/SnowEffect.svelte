<!-- NeuralNetworkBackground.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	// Define the type for a neuron
	interface Neuron {
		size: number;
		x: number;
		y: number;
		color: string;
		animationDelay: number;
	}

	// Function to create a random neuron
	function createNeuron(): Neuron {
		const size = Math.random() * 15 + 5;
		const x = Math.random() * 100;
		const y = Math.random() * 100;
		const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
		const animationDelay = Math.random() * 3;
		return { size, x, y, color, animationDelay };
	}

	let neurons: Neuron[] = [];

	// Create neurons on mount
	onMount(() => {
		for (let i = 0; i < 100; i++) {
			neurons = [...neurons, createNeuron()];
		}
	});
</script>

{#each neurons as { size, x, y, color, animationDelay }, i}
	<div
		class="neuron"
		style="width: {size}px; height: {size}px; left: {x}%; top: {y}%; background-color: {color}; animation-delay: {animationDelay}s;"
	></div>
{/each}

<style>
	.neuron {
		position: absolute;
		border-radius: 50%;
		animation: pulse 6s infinite alternate linear;
		z-index: 10;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.2);
			opacity: 0.01;
		}
		100% {
			transform: scale(9);
			opacity: 0.1;
		}
	}
	body,
	html {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow: hidden;

	}
</style>
