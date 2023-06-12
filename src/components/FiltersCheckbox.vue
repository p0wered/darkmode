<template>
    <div class="store-list-item">
        <label class="checkbox-label" style="margin: 0">
            <p class="label-text" style="margin: 0">{{filterName}}</p>
            <input class="origin-checkbox" type="checkbox">
            <span class="custom-checkbox">
                <i class="bi bi-check"></i>
            </span>
        </label>
    </div>
</template>

<script>
export default {
    name: "FiltersCheckbox",
    props: ['filterName']
}
</script>

<style scoped>

</style>