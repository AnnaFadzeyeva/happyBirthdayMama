
 <script lang="ts">
  export let text: string;
  export let type: "button" | "submit" | "reset" = 'button'; 
</script>

<button type={type}>
  {text}
</button>

