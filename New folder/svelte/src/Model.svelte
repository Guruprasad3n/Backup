<!-- <script>
  export let message = "Hello Iam Guru";
  export let showModal = false;
  export let isPromo = false;
</script>

{#if showModal}

  <div class="backdrop" class:promo={isPromo} on:click|self>
    <div class="modal">
      <p>{message}</p>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
  }
  .modal {
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
  }
  .promo .modal {
    background: red;
    color: white;
  }
</style> -->
