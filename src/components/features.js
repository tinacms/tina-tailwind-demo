import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
} from "react-tinacms-inline";
import { ACTION_FIELDS, Actions } from "./actions";

export const FeatureBlock = ({ index, data }) => {
  return (
    <div class="px-8 py-6 lg:w-1/3 md:w-full">
      <BlocksControls
        index={index}
        focusRing={{ offset: 16 }}
        insetControls={false}
      >
        <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 mr-3 text-gray-50 bg-blue-400 rounded-full">
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM11 13H4v6h7v-6zm9 0h-7v6h7v-6zm-9-8H4v6h7V5zm9 0h-7v6h7V5z" />
          </svg>
        </div>
        <h2 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
          <InlineTextarea name="title" />
        </h2>
        <p class="mb-4 text-base leading-relaxed">
          <InlineTextarea name="text" />
        </p>
        <Actions actions={data.actions} />
      </BlocksControls>
    </div>
  );
};

export const feature_template = {
  label: "Feature",
  defaultItem: {
    title: "Feature Heading Text",
    text:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
    actions: [
      {
        label: "Learn More",
        type: "link",
      },
    ],
  },
  itemProps: (item) => ({
    label: item.title,
  }),
  fields: [
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "text",
      label: "Text",
      component: "text",
    },
    ...ACTION_FIELDS,
  ],
};

export const Features = ({ data }) => {
  return (
    <section class="text-gray-700 body-font bg-gray-50">
      <div class="container py-24 mx-auto">
        <InlineBlocks
          direction="horizontal"
          className="flex flex-wrap text-left"
          name="items"
          blocks={FEATURE_BLOCKS}
        />
      </div>
    </section>
  );
};

export function FeaturesBlock(props) {
  return (
    <BlocksControls
      index={props.index}
      focusRing={{ offset: -12 }}
      insetControls={true}
    >
      <Features data={props.data} />
    </BlocksControls>
  );
}

export const features_template = {
  label: "Features",
  defaultItem: {
    items: [
      {
        _template: "feature",
        title: "Longer Information 1",
        text:
          "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        actions: [
          {
            label: "Learn More",
            type: "link",
          },
        ],
      },
      {
        _template: "feature",
        title: "Longer Information 2",
        text:
          "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        actions: [
          {
            label: "Learn More",
            type: "link",
          },
        ],
      },
      {
        _template: "feature",
        title: "Longer Information 3",
        text:
          "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
        actions: [
          {
            label: "Learn More",
            type: "link",
          },
        ],
      },
    ],
  },
  fields: [
    {
      label: "Features",
      name: "items",
      component: "blocks",
      itemProps: (item) => ({
        label: item.title,
      }),
      templates: {
        feature: feature_template,
      },
    },
  ],
};

const FEATURE_BLOCKS = {
  feature: {
    Component: FeatureBlock,
    template: feature_template,
  },
};