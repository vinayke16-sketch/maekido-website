/* @ds-bundle: {"format":3,"namespace":"MaekidoDesignSystem_1e2d2e","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"159868c9268f","components/core/Badge.jsx":"63df41286399","components/core/Button.jsx":"380f6946eea2","components/core/Card.jsx":"6984fefa7ac2","components/core/IconTile.jsx":"3ffdcc44bf2c","components/core/Input.jsx":"719181a1bc95","components/core/SectionLabel.jsx":"806968bc5555","components/core/Tag.jsx":"5671461ac0eb","ui_kits/dashboard/chrome.jsx":"d0b0360cb406","ui_kits/dashboard/home.jsx":"da589d2c95c2","ui_kits/marketing/chrome.jsx":"fe9beb54e76c","ui_kits/marketing/hero.jsx":"617ff8a0ef93","ui_kits/marketing/sections.jsx":"60b95b929861"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaekidoDesignSystem_1e2d2e = window.MaekidoDesignSystem_1e2d2e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SOLID = {
  coral: "var(--mk-coral)",
  sun: "var(--mk-sun)",
  mint: "var(--mk-mint)",
  sky: "var(--mk-sky)",
  violet: "var(--mk-violet)",
  ink: "var(--mk-ink)"
};

/**
 * Maekido Avatar — circular initials or image chip in a maker-spectrum color.
 * Pass `src` for a photo, or `name` to derive initials.
 */
function Avatar({
  name = "",
  src = null,
  color = "violet",
  size = 40,
  style = {},
  ...rest
}) {
  const bg = SOLID[color] || SOLID.violet;
  const fg = color === "sun" ? "var(--mk-ink)" : "#fff";
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name || undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      background: src ? "transparent" : bg,
      color: fg,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: Math.round(size * 0.4),
      letterSpacing: "0.02em",
      flex: "0 0 auto",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SOLID = {
  coral: "var(--mk-coral)",
  sun: "var(--mk-sun)",
  mint: "var(--mk-mint)",
  sky: "var(--mk-sky)",
  violet: "var(--mk-violet)",
  ink: "var(--mk-ink)"
};

/**
 * Maekido Badge — tiny status pill or count. `dot` renders a bare status dot.
 * Solid by default; use it for counts, "New", live status.
 */
function Badge({
  children,
  color = "coral",
  dot = false,
  style = {},
  ...rest
}) {
  const bg = SOLID[color] || SOLID.coral;
  const fg = color === "sun" ? "var(--mk-ink)" : "#fff";
  if (dot) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: bg,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 7px",
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: fg,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: 1,
      letterSpacing: "0.02em",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Maekido Button — pill-shaped, Plus Jakarta Sans Bold.
 * Variants: primary (ink), coral (hero accent), sun (highlight), secondary (2px ink ring), ghost.
 * Sizes: sm / md / lg.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "10px 20px",
      fontSize: 13,
      gap: 8
    },
    md: {
      padding: "14px 28px",
      fontSize: 14,
      gap: 10
    },
    lg: {
      padding: "18px 36px",
      fontSize: 16,
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: "var(--mk-ink)",
      color: "var(--mk-cream)"
    },
    coral: {
      background: "var(--mk-coral)",
      color: "#fff"
    },
    sun: {
      background: "var(--mk-sun)",
      color: "var(--mk-ink)"
    },
    secondary: {
      background: "transparent",
      color: "var(--mk-ink)",
      boxShadow: "inset 0 0 0 2px var(--mk-ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--mk-ink)"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: onClick,
    disabled: disabled,
    className: `mk-btn mk-btn--${variant}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: s.padding,
      border: "none",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      whiteSpace: "nowrap",
      letterSpacing: "0.01em",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "all var(--dur-slow) var(--ease-out)",
      ...v,
      ...style
    }
  }, rest), iconLeft, children, iconRight, /*#__PURE__*/React.createElement("style", null, `
        .mk-btn--primary:hover:not(:disabled) { background: var(--mk-coral); color: #fff; }
        .mk-btn--coral:hover:not(:disabled) { background: var(--mk-ink); color: #fff; }
        .mk-btn--sun:hover:not(:disabled) { background: var(--mk-coral); color: #fff; }
        .mk-btn--secondary:hover:not(:disabled) { background: var(--mk-ink); color: var(--mk-cream); }
        .mk-btn--ghost:hover:not(:disabled) { background: var(--mk-coral-soft); }
        .mk-btn:active:not(:disabled) { transform: scale(0.97); }
        .mk-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
      `));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACE = {
  light: {
    background: "#fff",
    color: "var(--mk-ink)",
    border: "1px solid var(--mk-line)",
    boxShadow: "none",
    sub: "var(--mk-mid)"
  },
  warm: {
    background: "var(--mk-warm)",
    color: "var(--mk-ink)",
    border: "1px solid var(--mk-line)",
    boxShadow: "none",
    sub: "var(--mk-mid)"
  },
  dark: {
    background: "var(--mk-ink)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "none",
    sub: "var(--mk-on-dark-60)"
  }
};

/**
 * Maekido Card — rounded 24px surface with optional icon tile, Fraunces title,
 * body and footer. Variants: light / warm / dark. `interactive` adds hover lift.
 * Compose freely via children, or use the title/body/icon/footer shorthand props.
 */
function Card({
  variant = "light",
  icon = null,
  title,
  body,
  footer = null,
  interactive = false,
  children,
  style = {},
  ...rest
}) {
  const s = SURFACE[variant] || SURFACE.light;
  const shorthand = title || body || icon || footer;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `mk-card${interactive ? " mk-card--int" : ""}`,
    style: {
      boxSizing: "border-box",
      borderRadius: "var(--radius-xl)",
      padding: 28,
      background: s.background,
      color: s.color,
      border: s.border,
      boxShadow: s.boxShadow,
      transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, rest), shorthand ? /*#__PURE__*/React.createElement(React.Fragment, null, icon, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.1,
      marginTop: icon ? 16 : 0
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      lineHeight: 1.6,
      color: s.sub,
      marginTop: 8
    }
  }, body), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, footer)) : children, /*#__PURE__*/React.createElement("style", null, `
        .mk-card--int { cursor: pointer; }
        .mk-card--int:hover { transform: translateY(-8px); box-shadow: var(--shadow-pop); }
      `));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TINT = {
  coral: {
    bg: "var(--mk-tile-coral)",
    fg: "var(--mk-coral-ink)"
  },
  sun: {
    bg: "var(--mk-tile-sun)",
    fg: "var(--mk-sun-ink)"
  },
  mint: {
    bg: "var(--mk-tile-mint)",
    fg: "var(--mk-mint-ink)"
  },
  sky: {
    bg: "var(--mk-tile-sky)",
    fg: "var(--mk-sky-ink)"
  },
  violet: {
    bg: "var(--mk-tile-violet)",
    fg: "var(--mk-violet-ink)"
  },
  ink: {
    bg: "rgba(13,13,13,0.06)",
    fg: "var(--mk-ink)"
  }
};

/**
 * Maekido IconTile — rounded pastel-gradient square that holds a glyph or icon.
 * The signature top-left accent inside cards.
 */
function IconTile({
  children,
  color = "coral",
  size = 52,
  style = {},
  ...rest
}) {
  const t = TINT[color] || TINT.coral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-md)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: Math.round(size * 0.42),
      flex: "0 0 auto",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Maekido Input — labelled text field. 12px radius, ink text, coral focus ring.
 * Pass `label` and any native input props. Errors flip the ring coral.
 */
function Input({
  label,
  hint,
  error,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || `mk-input-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--mk-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "mk-input",
    style: {
      boxSizing: "border-box",
      width: "100%",
      height: 46,
      padding: "0 16px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--mk-ink)",
      background: "#fff",
      border: `2px solid ${error ? "var(--mk-coral)" : "var(--mk-line-strong)"}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? "var(--mk-coral-ink)" : "var(--mk-mid)"
    }
  }, error || hint), /*#__PURE__*/React.createElement("style", null, `
        .mk-input::placeholder { color: var(--mk-mid); }
        .mk-input:focus { border-color: var(--mk-coral); box-shadow: var(--shadow-focus); }
      `));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const C = {
  coral: "var(--mk-coral)",
  sun: "var(--mk-sun)",
  mint: "var(--mk-mint)",
  sky: "var(--mk-sky)",
  violet: "var(--mk-violet)",
  ink: "var(--mk-ink)"
};
const SOFT = {
  coral: "var(--mk-coral-soft)",
  sun: "var(--mk-sun-soft)",
  mint: "var(--mk-mint-soft)",
  sky: "var(--mk-sky-soft)",
  violet: "var(--mk-violet-soft)",
  ink: "rgba(13,13,13,0.06)"
};

/**
 * Maekido SectionLabel — the dot + ALL-CAPS overline pill used to head sections.
 * Set `pill={false}` for a bare dotted eyebrow (no background).
 */
function SectionLabel({
  children,
  color = "coral",
  pill = true,
  style = {},
  ...rest
}) {
  const dot = C[color] || C.coral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: 1,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: dot,
      ...(pill ? {
        background: SOFT[color] || SOFT.coral,
        borderRadius: "var(--radius-pill)",
        padding: "6px 16px"
      } : {}),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: dot,
      flex: "0 0 auto"
    }
  }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TINT = {
  coral: {
    bg: "var(--mk-coral-soft)",
    fg: "var(--mk-coral-ink)",
    solid: "var(--mk-coral)"
  },
  sun: {
    bg: "var(--mk-sun-soft)",
    fg: "var(--mk-sun-ink)",
    solid: "var(--mk-sun)"
  },
  mint: {
    bg: "var(--mk-mint-soft)",
    fg: "var(--mk-mint-ink)",
    solid: "var(--mk-mint)"
  },
  sky: {
    bg: "var(--mk-sky-soft)",
    fg: "var(--mk-sky-ink)",
    solid: "var(--mk-sky)"
  },
  violet: {
    bg: "var(--mk-violet-soft)",
    fg: "var(--mk-violet-ink)",
    solid: "var(--mk-violet)"
  },
  ink: {
    bg: "rgba(13,13,13,0.08)",
    fg: "var(--mk-ink)",
    solid: "var(--mk-ink)"
  }
};

/**
 * Maekido Tag — small pill label. Soft-tinted by default; `outlined` gives a 2px ring
 * (used for "personality" tags); `solid` fills with the accent.
 */
function Tag({
  children,
  color = "coral",
  variant = "soft",
  style = {},
  ...rest
}) {
  const t = TINT[color] || TINT.coral;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: 11,
    lineHeight: 1,
    letterSpacing: "0.05em",
    padding: "5px 14px",
    whiteSpace: "nowrap"
  };
  const skin = variant === "outlined" ? {
    background: "transparent",
    color: t.solid,
    boxShadow: `inset 0 0 0 2px ${t.solid}`,
    padding: "8px 16px",
    fontSize: 13
  } : variant === "solid" ? {
    background: t.solid,
    color: color === "sun" ? "var(--mk-ink)" : "#fff"
  } : {
    background: t.bg,
    color: t.fg
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/chrome.jsx
try { (() => {
// Maekido Maker Dashboard — sidebar + topbar chrome.

function Sidebar({
  active,
  onNav
}) {
  const items = [["home", "Home", "⌂"], ["projects", "My Projects", "▤"], ["camps", "My Camps", "▲"], ["badges", "Badges", "✦"], ["explore", "Explore", "◎"]];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 244,
      flex: "0 0 244px",
      background: "var(--mk-ink)",
      color: "#fff",
      padding: "26px 18px",
      display: "flex",
      flexDirection: "column",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 8px 8px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo-white.svg",
    alt: "Maekido",
    style: {
      height: 24
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      marginTop: 24
    }
  }, items.map(([key, label, glyph]) => {
    const on = active === key;
    return /*#__PURE__*/React.createElement("a", {
      key: key,
      onClick: () => onNav && onNav(key),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 14px",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: on ? "var(--mk-ink)" : "rgba(255,255,255,0.7)",
        background: on ? "var(--mk-sun)" : "transparent",
        transition: "background var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        textAlign: "center",
        fontSize: 15
      }
    }, glyph), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      background: "rgba(255,255,255,0.06)",
      borderRadius: "var(--radius-md)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "#fff"
    }
  }, "Level up"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--mk-on-dark-60)",
      marginTop: 4,
      lineHeight: 1.5
    }
  }, "2 more projects to your next badge."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: "rgba(255,255,255,0.12)",
      marginTop: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "70%",
      height: "100%",
      background: "var(--mk-coral)"
    }
  }))));
}
function TopBar({
  title,
  onNew
}) {
  const {
    Button,
    Avatar,
    Badge
  } = window.MaekidoDesignSystem_1e2d2e;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 32px",
      borderBottom: "1px solid var(--mk-line)",
      background: "var(--mk-cream)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 28,
      letterSpacing: "-0.01em",
      color: "var(--mk-ink)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontSize: 18,
      cursor: "pointer",
      color: "var(--mk-mid)"
    }
  }, "\u25D4", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -4,
      right: -6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "coral"
  }, "2"))), /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    size: "sm",
    onClick: onNew
  }, "+ New project"), /*#__PURE__*/React.createElement(Avatar, {
    name: "Ada Lovelace",
    color: "violet",
    size: 38
  })));
}
Object.assign(window, {
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/home.jsx
try { (() => {
// Maekido Maker Dashboard — Home view content (greeting, project grid, camp row).

function ProjectCard({
  color,
  glyph,
  title,
  meta,
  progress,
  tag,
  onOpen
}) {
  const {
    IconTile,
    Tag
  } = window.MaekidoDesignSystem_1e2d2e;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    className: "mk-proj",
    style: {
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      padding: 22,
      boxShadow: "var(--shadow-card-soft)",
      cursor: "pointer",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    color: color
  }, glyph), /*#__PURE__*/React.createElement(Tag, {
    color: color
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19,
      color: "var(--mk-ink)",
      marginTop: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--mk-mid)",
      marginTop: 4
    }
  }, meta), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 3,
      background: "var(--mk-warm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: progress + "%",
      height: "100%",
      background: "var(--mk-" + color + ")"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 700,
      color: "var(--mk-ink)"
    }
  }, progress, "%")));
}
function DashboardHome({
  onOpenProject
}) {
  const {
    SectionLabel,
    Button
  } = window.MaekidoDesignSystem_1e2d2e;
  const projects = [["coral", "▲", "Line-following Robot", "Robotics Camp · 8 steps", 70, "In progress"], ["mint", "◆", "Pixel Platformer", "Game Design · 12 steps", 45, "In progress"], ["sky", "●", "Weather Station", "Electronics · 6 steps", 100, "Shipped"], ["violet", "■", "Stop-motion Film", "Media Lab · 5 steps", 20, "In progress"]];
  const camps = [["Robotics Camp", "Jul 8 – Jul 26", "sun", "Mon–Fri · 9:00"], ["Game Design Lab", "Aug 5 – Aug 16", "mint", "Weekends"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 32px 48px",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--mk-ink)",
      borderRadius: "var(--radius-xl)",
      padding: "30px 32px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 280,
      height: 280,
      borderRadius: "50%",
      background: "var(--mk-coral)",
      filter: "blur(90px)",
      opacity: 0.4,
      top: -140,
      right: -40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "sun",
    pill: false
  }, "Welcome back"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 34,
      lineHeight: 1.05,
      marginTop: 10
    }
  }, "Let's make something, ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--mk-coral)",
      fontStyle: "italic"
    }
  }, "Ada.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--mk-on-dark-60)",
      marginTop: 8
    }
  }, "You've shipped 1 project and earned 4 badges. Keep building.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo-mark.svg",
    alt: "",
    style: {
      height: 96,
      opacity: 0.95
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 22,
      color: "var(--mk-ink)",
      margin: 0
    }
  }, "My Projects"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 700,
      color: "var(--mk-coral)",
      cursor: "pointer"
    }
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 18,
      marginTop: 16
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p[2],
    color: p[0],
    glyph: p[1],
    title: p[2],
    meta: p[3],
    progress: p[4],
    tag: p[5],
    onOpen: () => onOpenProject && onOpenProject(p[2])
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 22,
      color: "var(--mk-ink)",
      margin: "36px 0 16px"
    }
  }, "Upcoming Camps"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, camps.map(([name, dates, color, when]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      background: "var(--mk-warm)",
      borderRadius: "var(--radius-xl)",
      padding: "20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "var(--radius-md)",
      background: "var(--mk-" + color + ")",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 22,
      color: "var(--mk-ink)",
      flex: "0 0 auto"
    }
  }, name[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--mk-ink)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--mk-mid)",
      marginTop: 2
    }
  }, dates, " \xB7 ", when)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Details")))), /*#__PURE__*/React.createElement("style", null, `.mk-proj:hover{ transform: translateY(-3px); box-shadow: var(--shadow-pop); }`));
}
window.DashboardHome = DashboardHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/chrome.jsx
try { (() => {
// Maekido marketing site — shared building blocks (nav + footer + maker shapes).
// Exposes to window so other kit scripts can use them.

function MakerMark({
  size = 40
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo-mark.svg",
    alt: "",
    style: {
      height: size,
      display: "block"
    }
  });
}
function Logo({
  dark = false,
  height = 26
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/logo/logo-white.svg" : "../../assets/logo/logo-black.svg",
    alt: "Maekido",
    style: {
      height,
      display: "block"
    }
  });
}
function NavBar({
  onNav,
  active = "home"
}) {
  const links = [["Programs", "programs"], ["Camps", "camps"], ["For Schools", "schools"], ["Stories", "stories"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 48px",
      background: "rgba(250,247,242,0.82)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--mk-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav && onNav("home"),
    style: {
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28
    }
  }, links.map(([label, key]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    onClick: () => onNav && onNav(key),
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      color: active === key ? "var(--mk-ink)" : "var(--mk-mid)",
      textDecoration: "none"
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNav && onNav("login")
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    size: "sm",
    onClick: () => onNav && onNav("enroll")
  }, "Enroll now")));
}
function Footer() {
  const cols = [["Programs", ["Summer Camps", "Workshops", "After-school", "In-school"]], ["Company", ["About", "Our Makers", "Careers", "Press"]], ["Support", ["Help Center", "Contact", "Safety", "FAQ"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--mk-ink)",
      color: "#fff",
      padding: "64px 48px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 48,
      flexWrap: "wrap",
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    dark: true,
    height: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--mk-on-dark-60)",
      marginTop: 18
    }
  }, "Knowledge that moves, creation that stays. Turning curiosity into creation since day one.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--mk-on-dark-35)",
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--mk-on-dark-60)",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--mk-on-dark-35)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Maekido. Made by makers."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms")));
}
Object.assign(window, {
  MakerMark,
  Logo,
  NavBar,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/hero.jsx
try { (() => {
// Maekido marketing — Hero (dark, with radial glows + maker mark).

function Hero({
  onNav
}) {
  const {
    SectionLabel,
    Button
  } = window.MaekidoDesignSystem_1e2d2e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--mk-ink)",
      padding: "96px 48px 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 620,
      height: 620,
      borderRadius: "50%",
      background: "var(--mk-sun)",
      filter: "blur(110px)",
      opacity: 0.14,
      top: -200,
      right: -160
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 460,
      height: 460,
      borderRadius: "50%",
      background: "var(--mk-coral)",
      filter: "blur(110px)",
      opacity: 0.18,
      bottom: -160,
      right: 200
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 360,
      height: 360,
      borderRadius: "50%",
      background: "var(--mk-mint)",
      filter: "blur(110px)",
      opacity: 0.12,
      top: 220,
      left: 120
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "sun",
    pill: false
  }, "Learn by making"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 78,
      lineHeight: 0.96,
      letterSpacing: "-0.03em",
      color: "#fff",
      margin: "20px 0 0"
    }
  }, "Turn curiosity", /*#__PURE__*/React.createElement("br", null), "into ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--mk-coral)",
      fontStyle: "italic"
    }
  }, "creation.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--mk-on-dark-60)",
      margin: "24px 0 0",
      maxWidth: 460
    }
  }, "Summer camps, workshops, and school programs where young people build real projects \u2014 and the confidence to call themselves makers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    size: "lg",
    onClick: () => onNav && onNav("enroll")
  }, "Start building"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav && onNav("programs"),
    style: {
      color: "#fff",
      boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.3)"
    }
  }, "Explore programs")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 48
    }
  }, [["12k+", "Young makers"], ["340", "Projects shipped"], ["28", "Partner schools"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 34,
      color: "#fff",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--mk-on-dark-35)",
      marginTop: 6
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/logo-mark.svg",
    alt: "",
    style: {
      width: "100%",
      maxWidth: 360,
      filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.4))"
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/sections.jsx
try { (() => {
// Maekido marketing — Programs grid + "how it works" + testimonial + enroll CTA.

function Programs() {
  const {
    Card,
    IconTile,
    Tag,
    SectionLabel
  } = window.MaekidoDesignSystem_1e2d2e;
  const items = [["coral", "▲", "Summer Camps", "Three weeks of full-day making — robotics, game design, woodcraft and more.", "Ages 9–16"], ["mint", "◆", "Workshops", "Single-session deep dives where curiosity turns into a finished project.", "Weekends"], ["sky", "●", "After-school", "Weekly clubs that build skills, friendships and a maker's mindset.", "Term-time"], ["violet", "■", "In-school", "We bring the makerspace to your classroom, mapped to your curriculum.", "Partner schools"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mk-cream)",
      padding: "88px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "coral"
  }, "Programs"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 46,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: "var(--mk-ink)",
      margin: "16px 0 8px",
      maxWidth: 560
    }
  }, "A path for every ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--mk-coral)",
      fontStyle: "italic"
    }
  }, "maker.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--mk-mid)",
      maxWidth: 480,
      margin: 0
    }
  }, "However curiosity strikes, there's a way in. Real skills, real projects, every time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20,
      marginTop: 40
    }
  }, items.map(([color, glyph, title, body, tag]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    variant: "light",
    interactive: true,
    icon: /*#__PURE__*/React.createElement(IconTile, {
      color: color
    }, glyph),
    title: title,
    body: body,
    footer: /*#__PURE__*/React.createElement(Tag, {
      color: color
    }, tag)
  })))));
}
function HowItWorks() {
  const {
    SectionLabel
  } = window.MaekidoDesignSystem_1e2d2e;
  const steps = [["01", "Spark", "Pick a project that lights you up — from robots to films."], ["02", "Make", "Build it hands-on with mentors who've shipped real things."], ["03", "Share", "Show your work, keep your skills, call yourself a maker."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mk-warm)",
      padding: "88px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    color: "sky"
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 46,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color: "var(--mk-ink)",
      margin: "16px 0 44px"
    }
  }, "Three weeks, one ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--mk-coral)",
      fontStyle: "italic"
    }
  }, "maker.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 36
    }
  }, steps.map(([n, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 56,
      color: "var(--mk-coral)",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: "var(--mk-line-strong)",
      margin: "18px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      color: "var(--mk-ink)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--mk-mid)",
      marginTop: 10
    }
  }, b))))));
}
function Testimonial() {
  const {
    Avatar
  } = window.MaekidoDesignSystem_1e2d2e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--mk-cream)",
      padding: "88px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      color: "var(--mk-ink)"
    }
  }, "\u201CI came in thinking I'd watch. I left having ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--mk-coral)",
      fontStyle: "italic"
    }
  }, "built a working robot"), " \u2014 and a whole new idea of what I can do.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Okafor",
    color: "violet",
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--mk-ink)"
    }
  }, "Maya Okafor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--mk-mid)"
    }
  }, "Maker, age 13 \xB7 Robotics Camp")))));
}
function EnrollCTA({
  onNav
}) {
  const {
    Button
  } = window.MaekidoDesignSystem_1e2d2e;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--mk-coral)",
      padding: "80px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 380,
      height: 380,
      borderRadius: "50%",
      background: "var(--mk-sun)",
      filter: "blur(120px)",
      opacity: 0.5,
      top: -160,
      right: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 1200,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 52,
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      color: "#fff",
      margin: 0
    }
  }, "Ready to make", /*#__PURE__*/React.createElement("br", null), "something?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      color: "rgba(255,255,255,0.88)",
      marginTop: 16
    }
  }, "Summer 2026 enrolment is open. Spots fill fast.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNav && onNav("enroll"),
    style: {
      background: "#fff",
      color: "var(--mk-ink)"
    }
  }, "Enroll now \u2192")));
}
Object.assign(window, {
  Programs,
  HowItWorks,
  Testimonial,
  EnrollCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

})();
