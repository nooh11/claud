import React from "react";
import { Interactive, interpolate, Easing, useCurrentFrame } from "remotion";
import { C, FONT } from "./theme";

type Group = { readonly words: readonly string[]; readonly accent: boolean; readonly tail?: string };

/**
 * يبني مجموعات: كل تتابع كلمات بين *نجمتين* = كبسولة واحدة لا تنكسر.
 * علامات الترقيم تلتصق بالكلمة قبلها حتى لا تيتم في سطر جديد.
 */

const PUNCT = /^[؟?!.،,:]+$/;

const groupize = (text: string): readonly Group[] => {
  const flat: { word: string; accent: boolean; tail?: string }[] = [];
  text.split(/(\*[^*]+\*)/).filter(Boolean).forEach((segment) => {
    const accent = segment.startsWith("*") && segment.endsWith("*");
    const body = accent ? segment.slice(1, -1) : segment;
    body.split(" ").filter(Boolean).forEach((word) => {
      const prev = flat[flat.length - 1];
      if (PUNCT.test(word) && prev) {
        if (prev.accent) {
          prev.tail = (prev.tail ?? "") + word;
        } else {
          prev.word += word;
        }
        return;
      }
      flat.push({ word, accent });
    });
  });

  const groups: Group[] = [];
  flat.forEach((item) => {
    const last = groups[groups.length - 1];
    if (last && last.accent === item.accent && !last.tail) {
      groups[groups.length - 1] = { accent: last.accent, words: [...last.words, item.word], tail: item.tail };
      return;
    }
    groups.push({ accent: item.accent, words: [item.word], tail: item.tail });
  });
  return groups;
};

const Word: React.FC<{
  readonly word: string;
  readonly at: number;
  readonly accent: boolean;
}> = ({ word, at, accent }) => {
  const frame = useCurrentFrame();
  return (
    <Interactive.Div
      name={word}
      style={{
        display: "inline-block",
        color: C.burgundy,
        opacity: interpolate(frame, [at, at + 17], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.215, 0.61, 0.355, 1),
        }),
        translate: interpolate(frame, [at, at + 17], ["0px 24px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.215, 0.61, 0.355, 1),
        }),
      }}
    >
      {word}
    </Interactive.Div>
  );
};

/** كابشن كلمة-كلمة: كل كلمة ترتفع 24px وتظهر في 0.28ث. الكبسولة تلفّ العبارة كاملة. */
export const Caption: React.FC<{
  readonly text: string;
  readonly startFrame: number;
  readonly size?: number;
}> = ({ text, startFrame, size = 84 }) => {
  const groups = groupize(text);
  let cursor = 0;

  return (
    <Interactive.Div
      name="Caption"
      style={{
        direction: "rtl",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "14px 16px",
        fontFamily: FONT,
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1.3,
        textAlign: "center",
      }}
    >
      {groups.map((group, gi) => {
        const base = startFrame + cursor * 7;
        const offset = cursor;
        cursor += group.words.length;
        return (
          <Interactive.Div
            key={`g${gi}`}
            name={group.accent ? "Accent" : "Plain"}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 0,
              whiteSpace: "nowrap",
            }}
          >
            <Interactive.Div
              name="Body"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
                backgroundColor: group.accent ? C.orange : "transparent",
                borderRadius: group.accent ? 16 : 0,
                padding: group.accent ? "2px 22px 12px" : "2px 0px 12px",
              }}
            >
              {group.words.map((word, wi) => (
                <Word key={`${word}-${wi}`} word={word} at={base + wi * 7 - offset * 0} accent={group.accent} />
              ))}
            </Interactive.Div>
            {group.tail ? (
              <Interactive.Div name="Tail" style={{ paddingBottom: 12, color: C.burgundy }}>
                {group.tail}
              </Interactive.Div>
            ) : null}
          </Interactive.Div>
        );
      })}
    </Interactive.Div>
  );
};
