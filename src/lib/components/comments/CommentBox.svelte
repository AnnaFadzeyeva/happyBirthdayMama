<script lang="ts">
    import { Input, Label } from 'flowbite-svelte';

    let name = '', city = '', relation = '', title = '', content = '';

	async function handleFormSubmit(event: SubmitEvent): Promise<void> {
        event.preventDefault();

        const formData = {
            name,
            city,
            relation,
            headline: title,
            text: content,
            imgSrc: 'https://example.com/path/to/image',
            position: relation,
            location: city
        };

        try {
            const response = await fetch('http://localhost:3001/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const responseData = await response.json();
            console.log('Server response:', responseData);
        } catch (error) {
            console.error('Failed to send data:', error);
        }
    }

</script>


<form class="container-comment" on:submit={handleFormSubmit}>
	<div class="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
		<div class="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
			<div class="mb-4 grid gap-6 md:grid-cols-2">
				<div class="ml-4 w-64">
					<Label for="name">Dein Name</Label>
					<Input type="text" id="name" bind:value={name} placeholder="Erika Musterfrau..." required />
				</div>
				<div class="ml-4 w-64">
					<Label for="city">Land oder Stadt</Label>
					<Input type="text" id="city" bind:value={city} placeholder="..." required />
				</div>
				<div class="ml-4 w-64">
					<Label for="relation">Wer bist du für Alena?</Label>
					<Input type="text" id="relation" bind:value={relation} placeholder="Freund:in, Kollege:in, ..." required />
				</div>
				<div class="ml-4 w-64">
					<Label for="titel">Titel des Posts</Label>
					<Input type="text" id="titel" bind:value={title} placeholder="Dear Alena..." required />
				</div>
			</div>
		</div>
		<div class="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
			<Label for="editor" class="sr-only">Veröffentlichen</Label>
			<textarea id="editor" rows="8" bind:value={content} class="block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" placeholder="Hier kannst du deine Glückwünsche schreiben..." required></textarea>
		</div>
	</div>
	<div class="container-button">
		<button type="submit">Glückwunsch speichern</button>
	</div>
</form>



<style>
	.container-comment {
		display: flex;
		flex-direction: column;
		width: 50vw;
		margin: 0 auto;
	}
	.container-button {
		display: flex;
		justify-content: flex-end;
	}

	@media only screen and (max-width: 992px) {
		.container-comment {
			width: 55vw;
		}
	}

	@media only screen and (max-width: 768px) {
		.container-comment {
			width: 60vw;
		}
	}

	@media only screen and (max-width: 576px) {
		.container-button {
			display: flex;
			justify-content: center;
		}
		.container-comment {
			width: 80vw;
		}
	}
</style>
