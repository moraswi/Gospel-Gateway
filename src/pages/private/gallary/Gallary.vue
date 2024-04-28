<template>
  <div class="px-md-4">
    <TheHeader title="Church gallary" class="mb-7"> </TheHeader>

    <div
      class="fb-video"
      data-href="https://www.facebook.com/facebook/videos/10153231379946729/"
      data-show-text="false"
    ></div>
    <v-row>
      <v-col cols="12" lg="3" md="4" v-for="vodeo in vodeos" :key="vodeo.id">
        <iframe
          width="100%"
          height="200"
          :src="vodeo.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TheHeader from "@/components/headers/TheHeader";

export default {
  name: "GallaryPage",

  components: {
    TheHeader,
  },

  data: () => ({
    vodeos: [
      {
        id: 1,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
      {
        id: 2,
        url: "https://www.youtube.com/embed/6OMov0wH5dE?si=Z22Peq5602iBz7y3",
      },
      {
        id: 3,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
      {
        id: 4,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
      {
        id: 5,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
      {
        id: 6,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
      {
        id: 7,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
      {
        id: 8,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
      {
        id: 9,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
      {
        id: 10,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
      {
        id: 11,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
      {
        id: 12,
        url: "https://www.youtube.com/embed/IQw-4JABPCM?si=2BP_i3-Kt8gsv-q-&amp;start=57",
      },
    ],
  }),
};
</script>
