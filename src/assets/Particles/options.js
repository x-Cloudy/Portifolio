const particleConfig = {
  background: {
    color: {
      value: "",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "",
    },
    links: {
      color: "#000000",
      distance: 180,
      enable: true,
      opacity: 0.40,
      width: 0.7,
    },
    move: {
      direction: "top-right",
      enable: true,
      outModes: {
        default: "out",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 200,
    },
    opacity: {
      value: 0,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: false,
  fullScreen: false
}

export default particleConfig