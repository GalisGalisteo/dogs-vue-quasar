<template>
  <q-card class="q-pa-lg">
    <div>
      <form @submit.prevent.stop="onSubmit" class="q-gutter-xs">
        <div>
          <q-img
            :src="dogDetails.image"
            ratio="1"
            width="300px"
            class="rounded-borders"
          />
          <q-file
            display-value=""
            borderless
            v-model="image"
            label="Upload image"
            @update:model-value="handleUpload()"
          />
        </div>
        <q-select
          use-input
          input-debounce="0"
          @filter="filterFn"
          :options="breedOptions"
          clearable
          rounded
          outlined
          v-model="dogDetails.breed"
          label="Breed"
          ref="breedRef"
          :rules="[(val) => !!val || '*required']"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-select
          :options="allColors"
          rounded
          outlined
          clearable
          v-model="dogDetails.color"
          label="Color"
          ref="colorRef"
          :rules="[(val) => !!val || '*required']"
        />
        <q-select
          :options="allSizes"
          rounded
          outlined
          clearable
          v-model="dogDetails.size"
          label="Size"
          ref="sizeRef"
          :rules="[(val) => !!val || '*required']"
        />
        <div class="row justify-center q-pt-sm">
          <q-btn
            rounded
            size="large"
            padding="sm lg"
            color="primary"
            type="submit"
            label="Submit"
          />
        </div>
      </form>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { DogInfo, ValidatableObject } from 'components/models';
import { allColors, allSizes, allBreeds } from 'src/utils/utils';

const $q = useQuasar();

const emit = defineEmits(['onSubmit']);

const dogDetails = ref<DogInfo>({
  image:
    'https://res.cloudinary.com/dfqoeq3s7/image/upload/v1705860996/empty-image_zwtfon.jpg',
  breed: '',
  color: '',
  size: '',
});

const image = ref(null);
const breedOptions = ref(allBreeds);

const breedRef = ref<ValidatableObject | null>(null);
const colorRef = ref<ValidatableObject | null>(null);
const sizeRef = ref<ValidatableObject | null>(null);

const handleUpload = () => {
  console.log('handleUpload is triggered');
  if (image.value) {
    dogDetails.value.image = URL.createObjectURL(image.value);
  }
};

const filterFn = (val: string, update: (callback: () => void) => void) => {
  update(() => {
    const needle = val.toLowerCase();
    breedOptions.value = allBreeds
      .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
      .filter((v) => v.toLowerCase().indexOf(needle) > -1);
  });
};

const onSubmit = () => {
  breedRef.value?.validate();
  colorRef.value?.validate();
  sizeRef.value?.validate();

  if (
    breedRef.value?.hasError ||
    colorRef.value?.hasError ||
    sizeRef.value?.hasError
  ) {
    console.log(breedRef.value?.hasError);
    return;
  } else {
    console.log(dogDetails.value);
    emit('onSubmit', dogDetails.value);

    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
    });
  }
};
</script>

<style scoped></style>
