<script lang="ts">
    import { onMount } from 'svelte';
  
    interface PostData {
      headline: string;
      text: string;
      imgSrc: string;
      altText: string;
      name: string;
      position: string;
      location: string;
    }
  
    let postData: PostData[] = [];
  
    onMount(async () => {
      try {
        const response = await fetch('http://localhost:3001/data/postData.json');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        postData = await response.json() as PostData[];
        console.log(postData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    });
  </script>
  

{#each postData as {headline, text, imgSrc, altText, name, position, location}}
    <figure class="flex flex-col items-center justify-center rounded-t-lg border-b border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:rounded-t-none md:rounded-ss-lg md:border-e">
        <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{headline}</h3>
            <p class="my-4">{text}</p>
        </blockquote>
        <figcaption class="flex items-center justify-center">
            <img class="h-9 w-9 rounded-full" src={imgSrc} alt={altText} />
            <div class="ms-3 space-y-0.5 text-left font-medium dark:text-white rtl:text-right">
                <div>{name}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">{position}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">{location}</div>
            </div>
        </figcaption>
    </figure>
{/each}
