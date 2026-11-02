from __future__ import annotations

from typing import Any


def normalize_name(value: str) -> str:
    """Normalize whitespace for incoming string values."""

    return " ".join(value.split())


def ensure_list(value: Any) -> list[str]:
    """Convert supported list-like values into a trimmed string list."""

    if isinstance(value, list):
        return [item.strip() for item in value if isinstance(item, str) and item.strip()]
    if isinstance(value, tuple):
        return [item.strip() for item in value if isinstance(item, str) and item.strip()]
    return []
